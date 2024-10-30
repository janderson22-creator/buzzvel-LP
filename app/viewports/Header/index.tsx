import { Button } from '@/components/Button';
import { Image } from '@/components/Image';
import { Text } from '@/components/Text';
import { header } from '@/data';
import Link from 'next/link';
import * as S from './styles';

const HeaderNav = () => (
  <S.ContainNav>
    <Text className="company-name">{header.companyName}</Text>
    <nav>
      <S.NavList>
        {header.navItems.map((item) => (
          <S.NavItem key={item}>
            <S.LinkItem href={`#${item.toLowerCase()}`}>{item}</S.LinkItem>
          </S.NavItem>
        ))}
      </S.NavList>
    </nav>
  </S.ContainNav>
);

const SupportSection = () => (
  <S.Support>
    <Image src="icons/headset.svg" className="headset" />
    <S.SupportNumber>
      <Link href="tel:+555818282">{header.supportNumber}</Link>
    </S.SupportNumber>
    <Button variant="primary" />
  </S.Support>
);

export const Header = () => (
  <S.ContainHeader>
    <HeaderNav />
    <SupportSection />
  </S.ContainHeader>
);
