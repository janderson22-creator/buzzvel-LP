import { Description } from '../../components/Description';
import { Image } from '../../components/Image';
import Text from '../../components/Text';
import { Title } from '../../components/Title';
import * as S from './styles';

export const PickTheSun = () => (
  <S.Container>
    <Text className="text">No more waste</Text>
    <Title className="title">Pick the Sun</Title>
    <Description className="description">
      Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis
      pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.
    </Description>

    <div className="orange-ball" />
    <div className="purple-ball" />
    <Image src="/desktop.webp" className="desktop-web-image" alt="desktop" />
    <Image src="/desktop-mob.webp" className="desktop-mob-image" alt="desktop" />
  </S.Container>
);
