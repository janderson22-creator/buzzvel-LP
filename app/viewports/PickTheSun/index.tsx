import { motion } from 'framer-motion';
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

    <S.Images>
      <motion.div
        className="orange-ball"
        animate={{
          scale: [1, 1.1, 1],
          backgroundColor: ['#ffcc00', '#ff9900', '#ffcc00'],
          x: [0, 20, 0],
          y: [0, 20, 0],
          rotate: [0, 10, -10, 0],
          boxShadow: [
            '0 0 0 rgba(255, 204, 0, 0)',
            '0 0 20px rgba(255, 204, 0, 0.5)',
            '0 0 40px rgba(255, 204, 0, 0.7)',
            '0 0 0 rgba(255, 204, 0, 0)',
          ],
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />

      <motion.div
        className="purple-ball"
        animate={{
          scale: [1, 1.05, 1],
          x: [0, -15, 15, 0],
          y: [0, 15, -15, 0],
          rotate: [0, -10, 10, 0],
        }}
        transition={{
          duration: 5,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />

      <Image src="icons/desktop.svg" className="image-desktop" alt="desktop-view" />
      <Image src="/desktop-mob.webp" className="image-mobile" alt="mobile-view" />
    </S.Images>
  </S.Container>
);
