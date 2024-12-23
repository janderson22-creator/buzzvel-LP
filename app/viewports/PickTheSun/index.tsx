'use client';

import { Image } from '@/components/Image';
import { ViewPortMainInfo } from '@/components/ViewportMainInfo';
import { pickTheSun } from '@/data';
import { motion } from 'framer-motion';
import { sunPulsing, purpleBallPulsing } from './animations';
import * as S from './styles';

export const PickTheSun = () => (
  <S.Container id="products">
    <S.Infos>
      <ViewPortMainInfo
        topic={pickTheSun.topic}
        title={pickTheSun.title}
        description={pickTheSun.description}
        alignItems="center"
      />
    </S.Infos>

    <S.Images>
      <motion.div animate="animate" variants={sunPulsing} className="orange-ball" />
      <motion.div animate="animate" className="purple-ball" variants={purpleBallPulsing} />
      <Image src="icons/desktop.svg" className="image-desktop" />
      <Image src="/desktop-mob.webp" className="image-mobile" />
    </S.Images>
  </S.Container>
);
