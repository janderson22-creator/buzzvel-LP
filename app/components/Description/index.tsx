'use client';

import styled from 'styled-components';

const Txt = styled.p`
  color: var(txt-0);
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.7rem;
`;

type Props = {
  plainText?: string;
  children?: React.ReactNode;
  className?: string;
};

export const Description = ({ plainText, children, className }: Props) => (
  <Txt className={className}>{children || plainText}</Txt>
);
