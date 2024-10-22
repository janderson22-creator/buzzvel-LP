'use client';

import styled from 'styled-components';

const Txt = styled.span`
  h1& {
    font-size: 2rem;
  }

  h2& {
    font-size: 1.5rem;
  }

  h3& {
    font-size: 1.2rem;
  }
`;

type Props = {
  plainText?: string;
  children?: React.ReactNode;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'p';
};

export const Text = ({ plainText, children, className, tag }: Props) => (
  <Txt as={tag} className={className}>
    {children || plainText}
  </Txt>
);
