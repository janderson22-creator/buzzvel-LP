import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { PhoneInterfacePowerful } from '../../components/AnimatedIcons/PhoneInterfacePowerful';
import { Image } from '../../components/Image';
import { ViewPortMainInfo } from '../../components/ViewportMainInfo';
import { personalizedServices } from '../../data';
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
    <S.Container>
      <S.Infos>
        <ViewPortMainInfo
          topic="System features"
          title="Powerful features"
          description="Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit."
          data={personalizedServices}
        />
      </S.Infos>

      <S.Icons>
        <Slider {...settings} className="slider-container">
          {slideItems.map((item) => (
            <Image key={item} src={item} alt="personalized-slide" className="slide-item" />
          ))}
        </Slider>
        <PhoneInterfacePowerful className="mobile-app" />

        <motion.div
          initial={{ scale: 1, y: 0 }}
          animate={{
            scale: [1, 1.05, 1],
            y: [0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'mirror',
          }}
        >
          <Image
            src="icons/bg-powerful.svg"
            className="mobile-background"
            alt="mobile-background"
          />
        </motion.div>
      </S.Icons>
    </S.Container>
  );
};
