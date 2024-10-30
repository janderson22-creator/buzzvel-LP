import { Image } from '@/components/Image';
import { Text } from '@/components/Text';
import { footer } from '@/data';
import Link from 'next/link';
import * as S from './styles';

export const Footer = () => (
  <S.Container>
    <S.CompanyInfo>
      <S.LogoWrapper>
        <Image src="icons/logo.svg" className="logo" />
        <S.CompanyName>{footer.companyName}</S.CompanyName>
      </S.LogoWrapper>
      <Text>{footer.rightsReserved}</Text>
    </S.CompanyInfo>
    <S.Navigation>
      <nav>
        <S.NavList>
          {footer.navItems.map((item) => (
            <S.NavItem key={item}>
              <Link href={`#${item.toLowerCase()}`}>{item}</Link>
            </S.NavItem>
          ))}
        </S.NavList>
      </nav>
    </S.Navigation>
  </S.Container>
);
