import styled from 'styled-components';
import { GeneralInfos } from '../../components/GeneralInfos';
import { Image } from '../../components/Image';
import { mqTabletAndMobile } from '../../global-style';

const Container = styled.div`
  display: flex;
  padding-right: 5rem;
  padding-top: 2rem;

  ${mqTabletAndMobile} {
    flex-direction: column-reverse;
    padding: 0 1rem;
  }
`;

const Icons = styled.div`
  position: relative;
  width: 70%;

  ${mqTabletAndMobile} {
    width: 100%;
  }

  .mobile-app {
    height: 40rem;
    left: -5rem;
    position: absolute;
    top: 2rem;
    width: 40rem;
    z-index: 1;

    ${mqTabletAndMobile} {
      height: 30rem;
      left: -6rem;
      top: 4rem;
      width: 30rem;
    }
  }

  .mobile-app-background {
    height: 40rem;
    left: -5rem;
    position: absolute;
    width: 40rem;

    ${mqTabletAndMobile} {
      height: 35rem;
      left: -10rem;
      top: 2rem;
      width: 35rem;
    }
  }
`;

const data = [
  {
    title: 'Et mauris',
    subtitle:
      'Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique.',
  },
  {
    title: 'Eget sit',
    subtitle:
      'Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.',
  },
  {
    title: 'Imperdiet pellentesque',
    subtitle:
      'Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla.',
  },
  {
    title: 'Non libero',
    subtitle:
      'Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra.',
  },
];

export const PersonalizedServices = () => (
  <Container>
    <Icons>
      <Image src="icons/mobile-app.svg" className="mobile-app" alt="mobile-app" />
      <Image
        src="icons/mobile-app-background.svg"
        className="mobile-app-background"
        alt="mobile-app-background"
      />
    </Icons>

    <GeneralInfos
      topic="Services"
      title="Personalized services"
      description="Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed."
      data={data}
    />
  </Container>
);
