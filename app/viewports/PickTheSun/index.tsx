import { Image } from '../../components/Image';
import { ViewPortMainInfo } from '../../components/ViewportMainInfo';
import * as S from './styles';

export const PickTheSun = () => (
  <S.Container>
    <S.Infos>
      <ViewPortMainInfo
        topic="No more waste"
        title="Pick the Sun"
        description="Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis
        pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin."
        alignItems="center"
      />
    </S.Infos>

    <div className="orange-ball" />
    <div className="purple-ball" />
    <Image src="/desktop.webp" className="desktop-web-image" alt="desktop" />
    <Image src="/desktop-mob.webp" className="desktop-mob-image" alt="desktop" />
  </S.Container>
);
