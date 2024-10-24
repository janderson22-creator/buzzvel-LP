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
            <a href="#products">Products</a>
          </S.NavItem>
          <S.NavItem>
            <a href="#solutions">Solutions</a>
          </S.NavItem>
          <S.NavItem>
            <a href="#services">Services</a>
          </S.NavItem>
          <S.NavItem>
            <a href="#configure">Configure</a>
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
