'use client';

import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { Image } from '../../components/Image';
import { ViewPortMainInfo } from '../../components/ViewportMainInfo';
import { PhoneInterfacePowerful } from '../../components/animatedIcons/PhoneInterfacePowerful';
import { powerfulFeatures } from '../../data';
import { ovalBgPulsing } from './animation';
import * as S from './styles';

export const PowerfulFeatures = () => {
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
    rtl: true,
  };

  const slideItems = [
    'icons/powerful-slide-1.svg',
    'icons/powerful-slide-2.svg',
    'icons/powerful-slide-3.svg',
  ];

  return (
    <S.Container id="solutions">
      <S.Infos>
        <ViewPortMainInfo
          topic={powerfulFeatures.topic}
          title={powerfulFeatures.title}
          description={powerfulFeatures.description}
          data={powerfulFeatures.sections}
        />
      </S.Infos>

      <S.Icons>
        <Slider {...settings} className="slider-container">
          {slideItems.map((item) => (
            <Image key={item} src={item} className="slide-item" />
          ))}
        </Slider>
        <PhoneInterfacePowerful className="mobile-app" />

        <motion.img
          src="icons/bg-powerful.svg"
          className="mobile-background"
          alt="mobile-background"
          variants={ovalBgPulsing}
          animate="animate"
        />
      </S.Icons>
    </S.Container>
  );
};
