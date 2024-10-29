'use client';

import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { AnimatedBlock } from '../../components/Animation';
import { Button } from '../../components/Button';
import { Image } from '../../components/Image';
import { Text } from '../../components/Text';
import { ViewPortMainInfo } from '../../components/ViewportMainInfo';
import { intro } from '../../data';
import * as S from './styles';

export const Intro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <S.Container ref={ref}>
      <S.Infos>
        <ViewPortMainInfo title={intro.title} description={intro.description} titleSize="large" />

        <AnimatedBlock isVisible={isInView}>
          <Button variant="primary" />
        </AnimatedBlock>

        <AnimatedBlock isVisible={isInView}>
          <S.Comment>
            <Text tag="p" className="message">
              {intro.message}
            </Text>
            <S.Profile>
              <Image src="/woman-profile.webp" className="user-image" />
              <S.UserInfos>
                <Text tag="span">{intro.name}</Text>
                <Text tag="span" className="link">
                  {intro.website}
                </Text>
              </S.UserInfos>
            </S.Profile>
          </S.Comment>
        </AnimatedBlock>
      </S.Infos>
      <Image src="/employee.webp" className="employee-image" alt={intro.altEmployeeImage} />
    </S.Container>
  );
};
