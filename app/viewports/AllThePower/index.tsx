'use client';

import { motion } from 'framer-motion';
import { Button } from '../../components/Button';
import { Image } from '../../components/Image';
import { Text } from '../../components/Text';
import { ViewPortMainInfo } from '../../components/ViewportMainInfo';
import { allThePower } from '../../data';
import { purpleBallPulsing } from './animation';
import * as S from './styles';

export const AllThePower = () => (
  <S.Container>
    <S.Header>
      <ViewPortMainInfo topicColor="yellow" topic={allThePower.topic} title={allThePower.title} />

      <S.ButtonGroup>
        <Button variant="secondary" />
        <Text className="text-detail">{allThePower.description}</Text>
      </S.ButtonGroup>
    </S.Header>
    <motion.div animate="animate" className="purple-ball" variants={purpleBallPulsing} />

    <Image src="icons/computer.svg" className="computer-image" />
  </S.Container>
);
