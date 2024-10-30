import { Text } from '@/components/Text';
import { mqTabletAndMobile } from '@/global-style';
import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.footer`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 2rem 5rem;
  z-index: 5;

  ${mqTabletAndMobile} {
    flex-direction: column;
    padding: 1.5rem 1rem;
  }
`;

export const CompanyInfo = styled.div`
  align-items: center;
  display: flex;

  ${mqTabletAndMobile} {
    flex-direction: column;
  }
`;

export const LogoWrapper = styled.div`
  align-items: center;
  display: flex;

  ${mqTabletAndMobile} {
    margin-bottom: 1.4rem;
  }
`;

export const CompanyName = styled(Text)`
  font-size: 1.4rem;
  font-weight: 700;
  margin-left: 0.5rem;
  margin-right: 1.4rem;
`;

export const Navigation = styled.div`
  align-items: center;
  display: flex;

  ${mqTabletAndMobile} {
    margin-top: 1.4rem;
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
`;

export const LinkItem = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;
