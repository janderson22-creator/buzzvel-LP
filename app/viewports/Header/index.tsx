import Image from 'next/image';
import styled from 'styled-components';
import { Button } from '../../components/Button';
import { Text } from '../../components/Text';
import { mqTabletAndMobile } from '../../global-style';

const ContainHeader = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 5rem;
`;

const CompanyName = styled(Text)`
  font-size: 2rem;
  font-weight: 700;
  margin-right: 2.2rem;
`;

const ContainNav = styled.div`
  align-items: center;
  display: flex;
`;

const Nav = styled.nav`
  ${mqTabletAndMobile} {
    display: none;
  }
`;

const NavList = styled.ul`
  align-items: center;
  display: flex;
  gap: 1rem;
  justify-content: center;
  list-style-type: none;
`;

const NavItem = styled.li`
  padding: 0.8rem 0.6rem;

  &:hover {
    text-decoration: underline;
  }
`;

const NavLink = styled.a`
  color: unset;
  font-weight: 500;
`;

const Support = styled.div`
  align-items: center;
  display: flex;

  ${mqTabletAndMobile} {
    display: none;
  }
`;

const SupportNumber = styled(Text)`
  color: #0369a1;
  padding: 0 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const Header = () => (
  <ContainHeader>
    <ContainNav>
      <CompanyName>soller</CompanyName>
      <Nav>
        <NavList>
          <NavItem>
            <NavLink href="#products">Products</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#solutions">Solutions</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#services">Services</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#configure">Configure</NavLink>
          </NavItem>
        </NavList>
      </Nav>
    </ContainNav>

    <Support>
      <Image src="icons/headset.svg" alt="support" width={24} height={24} loading="lazy" />
      <SupportNumber>
        <a href="tel:+555818282">555 818 282</a>
      </SupportNumber>
      <Button $variant="primary" />
    </Support>
  </ContainHeader>
);
