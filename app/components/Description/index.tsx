'use client';

import styled from 'styled-components';

const Txt = styled.h3<{ fontSize: string }>`
  color: var(txt-0);
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 400;
`;

type Props = {
  plainText?: string;
  children?: React.ReactNode;
  className?: string;
  fontSize?: string;
};

export const Description = ({ plainText, children, className, fontSize = '1.2rem' }: Props) => (
  <Txt fontSize={fontSize} className={className}>
    {children || plainText}
  </Txt>
);
