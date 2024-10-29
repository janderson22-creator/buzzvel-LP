import styled from 'styled-components';
import { mqTabletAndMobile } from '../../global-style';

export const ContainHeader = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 5rem;
  z-index: 1;

  ${mqTabletAndMobile} {
    padding: 0.8rem 1rem;
  }
`;
export const ContainNav = styled.div`
  align-items: center;
  display: flex;

  .company-name {
    font-size: 2rem;
    font-weight: 700;
    margin-right: 2.2rem;
  }

  nav {
    ${mqTabletAndMobile} {
      display: none;
    }
  }
`;

export const NavList = styled.ul`
  align-items: center;
  display: flex;
  gap: 1rem;
  list-style-type: none;
`;

export const NavItem = styled.li`
  padding: 0.8rem 0.6rem;

  a {
    color: black;
    position: relative;
    text-decoration: none;
    transition: color 0.3s ease;

    &::after {
      background-color: var(--color-2);
      bottom: 0;
      content: '';
      height: 0.1rem;
      left: 0;
      position: absolute;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s ease;
      width: 100%;
    }

    &:hover::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;

export const Support = styled.div`
  align-items: center;
  display: flex;

  ${mqTabletAndMobile} {
    display: none;
  }

  .headset {
    height: 1.4rem;
    width: 1.4rem;
  }
`;

export const SupportNumber = styled.span`
  color: var(--txt-1);
  padding: 0 1rem;

  &:hover {
    text-decoration: underline;
  }
`;
