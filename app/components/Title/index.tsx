'use client';

import styled from 'styled-components';
import { mqMobile } from '../../global-style';

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
};

export const Title = ({ plainText, children, className }: Props) => (
  <Txt className={className}>{children || plainText}</Txt>
);
