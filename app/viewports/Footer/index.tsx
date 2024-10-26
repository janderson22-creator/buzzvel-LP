import styled from 'styled-components';
import { Image } from '../../components/Image';
import Text from '../../components/Text';
import { mqMobile } from '../../global-style';

const Container = styled.footer`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 2rem 5rem;
  z-index: 5;

  ${mqMobile} {
    flex-direction: column;
    padding: 1.5rem 1rem;
  }

  .company-name {
    font-size: 1.4rem;
    font-weight: 700;
    margin-left: 0.5rem;
    margin-right: 1.4rem;
  }
`;

const CompanyInfos = styled.div`
  align-items: center;
  display: flex;

  ${mqMobile} {
    flex-direction: column;
  }

  .logo-company-name {
    align-items: center;
    display: flex;

    ${mqMobile} {
      margin-bottom: 1.4rem;
    }
  }
`;

const ContainNav = styled.div`
  align-items: center;
  display: flex;

  ${mqMobile} {
    margin-top: 1.4rem;
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

export const Footer = () => (
  <Container>
    <CompanyInfos>
      <div className="logo-company-name">
        <Image src="icons/logo.svg" className="logo" alt="logo" />
        <Text className="company-name">Soller</Text>
      </div>
      <Text>@ 2023 Soller, Inc. All rights reserved.</Text>
    </CompanyInfos>
    <ContainNav>
      <nav>
        <NavList>
          <NavItem>
            <a href="#products">Terms</a>
          </NavItem>
          <NavItem>
            <a href="#solutions">Privacy</a>
          </NavItem>
          <NavItem>
            <a href="#services">Support</a>
          </NavItem>
        </NavList>
      </nav>
    </ContainNav>
  </Container>
);
