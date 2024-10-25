'use client';

import { AllThePower } from './viewports/AllThePower';
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
    <AllThePower />
  </>
);

export default Home;
