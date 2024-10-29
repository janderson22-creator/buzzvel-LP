'use client';

import { useState } from 'react';
import styled from 'styled-components';
import { ArrowRight } from './arrowRight';

const theme = {
  primary: {
    color: 'var(--color-1)',
    hoverTextColor: 'var(--color-2)',
  },
  secondary: {
    color: 'var(--color-2)',
    hoverTextColor: 'var(--color-3)',
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
  max-width: 15rem;
  padding: 1rem 1.6rem;
  transition: all 0.4s ease-in-out;

  &:hover {
    background-color: ${({ $variant }) => theme[$variant].color};
    border: 0.125rem solid transparent;
    box-shadow: 0 0.2rem 0.2rem 0 var(--color-5);
    color: ${({ $variant }) => theme[$variant].hoverTextColor};
  }
`;

const Request = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  white-space: nowrap;
`;

type Props = {
  onClick?: () => void;
  className?: string;
  variant: 'primary' | 'secondary';
};

export const Button = ({ onClick, className, variant }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ButtonContain
      onClick={onClick}
      className={className}
      $variant={variant}
      type="button"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Request>Request a Quote</Request>
      <ArrowRight color={isHovered ? theme[variant].hoverTextColor : theme[variant].color} />
    </ButtonContain>
  );
};
