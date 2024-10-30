'use client';

import { Image } from '@/components/Image';
import { ViewPortMainInfo } from '@/components/ViewportMainInfo';
import { PhoneInterfacePersonalized } from '@/components/animatedIcons/PhoneInterfacePersonalized';
import { personalizedServices } from '@/data';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { ovalBgPulsing } from './animations';
import * as S from './styles';

export const PersonalizedServices = () => {
  const settings = {
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
    pauseOnHover: false,
  };

  const slideItems = [
    'icons/personalized-slide-1.svg',
    'icons/personalized-slide-2.svg',
    'icons/personalized-slide-3.svg',
  ];

  return (
    <S.Container id="services">
      <S.Icons>
        <Slider {...settings} className="slider-container">
          {slideItems.map((item) => (
            <Image key={item} src={item} className="slide-item" />
          ))}
        </Slider>
        <PhoneInterfacePersonalized className="mobile-app" />
        <motion.img
          src="icons/bg-personalized.svg"
          className="mobile-background"
          alt="background"
          variants={ovalBgPulsing}
          animate="animate"
        />
      </S.Icons>

      <S.Infos>
        <ViewPortMainInfo
          topic={personalizedServices.topic}
          title={personalizedServices.title}
          description={personalizedServices.description}
          data={personalizedServices.sections}
        />
      </S.Infos>
    </S.Container>
  );
};
