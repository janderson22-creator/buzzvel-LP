'use client';

import { Roboto } from 'next/font/google';
import styled from 'styled-components';
import { GlobalStyle, mqMobile } from '../global-style';
import { Header } from './Header';
import { Intro } from './Intro';

export const roboto = Roboto({ subsets: ['latin'], weight: '400' });

const Html = styled.html`
  height: 100%;
  overflow: hidden;
`;

const Body = styled.body`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const PageContainer = styled.div`
  overflow: hidden auto;

  ${mqMobile} {
    padding: 1.1rem;
  }
`;

export const RootLayout = ({ children }: any) => {
  return (
    <Html lang="pt" className={roboto.className}>
      <Body>
        <GlobalStyle />
        <Header />
        <Intro />
        <PageContainer>{children}</PageContainer>
      </Body>
    </Html>
  );
};
