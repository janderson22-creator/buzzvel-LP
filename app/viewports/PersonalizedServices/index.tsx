import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { PhoneInterfacePersonalized } from '../../components/AnimatedIcons/PhoneInterfacePersonalized';
import { Image } from '../../components/Image';
import { ViewPortMainInfo } from '../../components/ViewportMainInfo';
import { powerfulFeatures } from '../../data';
import { ovalBgPulsing } from '../../utils/animations';
import * as S from './styles';

export const PersonalizedServices = () => {
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
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
            <Image key={item} src={item} alt="personalized-slide" className="slide-item" />
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
          topic="Services"
          title="Personalized services"
          description="Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit."
          data={powerfulFeatures}
        />
      </S.Infos>
    </S.Container>
  );
};
