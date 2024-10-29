import { motion } from 'framer-motion';
import { Image } from '../../components/Image';
import { ViewPortMainInfo } from '../../components/ViewportMainInfo';
import { purpleBallPulsing, sunPulsing } from '../../utils/animations';
import * as S from './styles';

export const PickTheSun = () => (
  <S.Container id="products">
    <S.Infos>
      <ViewPortMainInfo
        topic="No more waste"
        title="Pick the Sun"
        description="Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis
        pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin."
        alignItems="center"
      />
    </S.Infos>

    <S.Images>
      <motion.div animate="animate" variants={sunPulsing} className="orange-ball" />
      <motion.div animate="animate" className="purple-ball" variants={purpleBallPulsing} />
      <Image src="icons/desktop.svg" className="image-desktop" alt="desktop-view" />
      <Image src="/desktop-mob.webp" className="image-mobile" alt="mobile-view" />
    </S.Images>
  </S.Container>
);
