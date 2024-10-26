import { Image } from '../../components/Image';
import Text from '../../components/Text';
import * as S from './styles';

export const Footer = () => (
  <S.Container>
    <S.CompanyInfo>
      <S.LogoWrapper>
        <Image src="icons/logo.svg" className="logo" alt="logo" />
        <S.CompanyName>Soller</S.CompanyName>
      </S.LogoWrapper>
      <Text>@ 2023 Soller, Inc. All rights reserved.</Text>
    </S.CompanyInfo>
    <S.Navigation>
      <nav>
        <S.NavList>
          {['Products', 'Solutions', 'Services'].map((item) => (
            <S.NavItem key={item}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </S.NavItem>
          ))}
        </S.NavList>
      </nav>
    </S.Navigation>
  </S.Container>
);
