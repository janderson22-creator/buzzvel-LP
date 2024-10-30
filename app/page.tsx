import { AllThePower } from '@/viewports/AllThePower';
import { Intro } from '@/viewports/Intro';
import { MakeSomething } from '@/viewports/MakeSomething';
import { PersonalizedServices } from '@/viewports/PersonalizedServices';
import { PickTheSun } from '@/viewports/PickTheSun';
import { PowerfulFeatures } from '@/viewports/PowerfulFeatures';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Soller',
  description:
    'Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque.',
  abstract:
    'Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.',
  robots: {
    index: true,
    follow: true,
    noimageindex: false,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      nocache: false,
    },
  },
};

const Home = () => (
  <>
    <Intro />
    <PickTheSun />
    <PersonalizedServices />
    <PowerfulFeatures />
    <MakeSomething />
    <AllThePower />
  </>
);

export default Home;
