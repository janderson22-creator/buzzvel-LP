'use client';

import { useState } from 'react';
import styled from 'styled-components';
import { Text } from '../Text';
import { ArrowRight } from './arrowRight';

const theme = {
  primary: {
    color: '#581C87',
    hoverTextColor: '#FCD34D',
  },
  secondary: {
    color: '#FCD34D',
    hoverTextColor: '#78350F',
  },
};

const ButtonContain = styled.button<{ $variant: 'primary' | 'secondary' }>`
  align-items: center;
  background-color: transparent;
  border: 0.125rem solid ${({ $variant }) => theme[$variant].color};
  border-radius: 6rem;
  color: ${({ $variant }) => theme[$variant].color};
  cursor: pointer;
  display: flex;
  gap: 0.8rem;
  padding: 1rem 1.6rem;
  transition: all 0.4s ease-in-out;

  &:hover {
    background-color: ${({ $variant }) => theme[$variant].color};
    border: 0.125rem solid transparent;
    box-shadow: 0 0.2rem 0.2rem 0 #00000040;
    color: ${({ $variant }) => theme[$variant].hoverTextColor};
  }
`;

const Request = styled(Text)`
  font-size: 1.2rem;
  font-weight: 700;
`;

type Props = {
  onClick?: () => void;
  className?: string;
  $variant: 'primary' | 'secondary';
};

export const Button = ({ onClick, className, $variant }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ButtonContain
      onClick={onClick}
      className={className}
      $variant={$variant}
      type="button"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Request>Request a Quote</Request>
      <ArrowRight color={isHovered ? theme[$variant].hoverTextColor : theme[$variant].color} />
    </ButtonContain>
  );
};
