'use client';

import styled from 'styled-components';

const Txt = styled.h3`
  color: var(txt-0);
  font-size: 1.2rem;
  font-weight: 400;
`;

type Props = {
  plainText?: string;
  children?: React.ReactNode;
  className?: string;
};

export const Description = ({ plainText, children, className }: Props) => (
  <Txt className={className}>{children || plainText}</Txt>
);
