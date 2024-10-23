import { Button } from '../../components/Button';
import { Image } from '../../components/Image';
import * as S from './styles';

export const Header = () => (
  <S.ContainHeader>
    <S.ContainNav>
      <S.CompanyName>soller</S.CompanyName>
      <S.Nav>
        <S.NavList>
          <S.NavItem>
            <S.NavLink href="#products">Products</S.NavLink>
          </S.NavItem>
          <S.NavItem>
            <S.NavLink href="#solutions">Solutions</S.NavLink>
          </S.NavItem>
          <S.NavItem>
            <S.NavLink href="#services">Services</S.NavLink>
          </S.NavItem>
          <S.NavItem>
            <S.NavLink href="#configure">Configure</S.NavLink>
          </S.NavItem>
        </S.NavList>
      </S.Nav>
    </S.ContainNav>

    <S.Support>
      <Image src="icons/headset.svg" className="headset" alt="support" />
      <S.SupportNumber>
        <a href="tel:+555818282">555 818 282</a>
      </S.SupportNumber>
      <Button $variant="primary" />
    </S.Support>
  </S.ContainHeader>
);
