'use client';

import { mqMobile } from '@/global-style';
import styled from 'styled-components';

const Txt = styled.h1`
  color: var(txt-0);
  font-size: 2rem;
  font-weight: 800;

  ${mqMobile} {
    font-weight: 700;
  }
`;

type Props = {
  plainText?: string;
  children?: React.ReactNode;
  className?: string;
  titleLevel: 'h1' | 'h2';
};

export const Title = ({ plainText, children, className, titleLevel }: Props) => (
  <Txt as={titleLevel} className={className}>
    {children || plainText}
  </Txt>
);
