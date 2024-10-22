'use client';

import styled from 'styled-components';

const Txt = styled.h1<{ fontSize: string }>`
  color: var(txt-0);
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 800;
`;

type Props = {
  plainText?: string;
  children?: React.ReactNode;
  className?: string;
  fontSize?: string;
};

export const Title = ({ plainText, children, className, fontSize = '2rem' }: Props) => (
  <Txt fontSize={fontSize} className={className}>
    {children || plainText}
  </Txt>
);
