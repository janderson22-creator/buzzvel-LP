'use client';

import { Intro } from './viewports/Intro';
import { MakeSomething } from './viewports/MakeSomething';
import { PersonalizedServices } from './viewports/PersonalizedServices';
import { PickTheSun } from './viewports/PickTheSun';
import { PowerfulFeatures } from './viewports/PowerfulFeatures';

const Home = () => (
  <>
    <Intro />
    <PickTheSun />
    <PersonalizedServices />
    <PowerfulFeatures />
    <MakeSomething />
  </>
);

export default Home;
