import { Button } from '../../components/Button';
import { Image } from '../../components/Image';
import Text from '../../components/Text';
import * as S from './styles';

const HeaderNav = () => (
  <S.ContainNav>
    <Text className="company-name">soller</Text>
    <nav>
      <S.NavList>
        {['Products', 'Solutions', 'Services', 'Configure'].map((item) => (
          <S.NavItem key={item}>
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </S.NavItem>
        ))}
      </S.NavList>
    </nav>
  </S.ContainNav>
);

const SupportSection = () => (
  <S.Support>
    <Image src="icons/headset.svg" className="headset" alt="support" />
    <S.SupportNumber>
      <a href="tel:+555818282">555 818 282</a>
    </S.SupportNumber>
    <Button $variant="primary" />
  </S.Support>
);

export const Header = () => (
  <S.ContainHeader>
    <HeaderNav />
    <SupportSection />
  </S.ContainHeader>
);
