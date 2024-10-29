'use client';

import styled from 'styled-components';

type Props = {
  children?: React.ReactNode;
  className?: string;
  tag?: 'span' | 'p';
};

const StyledText = styled.span`
  color: var(--txt-0);
`;

export const Text = ({ children, tag = 'span', className }: Props) => {
  return (
    <StyledText as={tag} className={className}>
      {children}
    </StyledText>
  );
};
