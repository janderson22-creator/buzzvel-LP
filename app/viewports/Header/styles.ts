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

export const CompanyName = styled.span`
  font-size: 2rem;
  font-weight: 700;
  margin-right: 2.2rem;
`;

export const ContainNav = styled.div`
  align-items: center;
  display: flex;
`;

export const Nav = styled.nav`
  ${mqTabletAndMobile} {
    display: none;
  }
`;

export const NavList = styled.ul`
  align-items: center;
  display: flex;
  gap: 1rem;
  justify-content: center;
  list-style-type: none;
`;

export const NavItem = styled.li`
  padding: 0.8rem 0.6rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const NavLink = styled.a`
  color: unset;
  font-weight: 500;
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
  color: #0369a1;
  padding: 0 1rem;

  &:hover {
    text-decoration: underline;
  }
`;
