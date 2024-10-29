import { motion } from 'framer-motion';
import { Image } from '../../components/Image';
import { ViewPortMainInfo } from '../../components/ViewportMainInfo';
import { pickTheSun } from '../../data';
import { sunPulsing, purpleBallPulsing } from './animations';
import * as S from './styles';

export const PickTheSun = () => (
  <S.Container id="products">
    <S.Infos>
      <ViewPortMainInfo
        topic={pickTheSun.topic}
        title={pickTheSun.title}
        description={pickTheSun.description}
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
