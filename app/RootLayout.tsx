'use client';

import { Roboto } from 'next/font/google';
import { useServerInsertedHTML } from 'next/navigation';
import { useState } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styled, { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { GlobalStyle } from './global-style';
import { Footer } from './viewports/Footer';
import { Header } from './viewports/Header';

const StyleSSR = ({ children }: { children: any }) => {
  const [styleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styleSheet.getStyleElement();
    styleSheet.instance.clearTag();
    return styles;
  });

  if (typeof window !== 'undefined') return children;
  return <StyleSheetManager sheet={styleSheet.instance}>{children}</StyleSheetManager>;
};

export const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700', '900'] });

const Html = styled.html`
  height: 100%;
  overflow: hidden;
`;

const Body = styled.body`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const RootLayout = ({ children }: any) => {
  return (
    <StyleSSR>
      <Html lang="pt" className={roboto.className}>
        <Body>
          <GlobalStyle />
          <Header />
          {children}
          <Footer />
        </Body>
      </Html>
    </StyleSSR>
  );
};
