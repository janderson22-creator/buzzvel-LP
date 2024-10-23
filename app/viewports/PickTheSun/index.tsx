import styled from 'styled-components';
import { Description } from '../../components/Description';
import { Image } from '../../components/Image';
import Text from '../../components/Text';
import { Title } from '../../components/Title';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-bottom: 30rem;
  padding-top: 5rem;
  position: relative;

  .text {
    color: var(--quaternary-color);
    font-size: 1.2rem;
    font-weight: 500;
  }

  .title {
    font-size: 3.5rem;
    margin-bottom: 1.3rem;
    margin-top: 0.5rem;
  }

  .description {
    padding: 0 15rem;
    text-align: center;
  }
`;

const Images = styled.div`
  align-items: center;
  bottom: -3rem;
  display: flex;
  position: absolute;
  width: 100%;

  .circles-image {
    height: 80%;
    width: 100%;
  }

  .desktop-image {
    bottom: -3rem;
    height: 90%;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    width: 75%;
  }
`;

export const PickTheSun = () => (
  <Container>
    <Text className="text">No more waste</Text>
    <Title className="title">Pick the Sun</Title>
    <Description className="description">
      Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis
      pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.
    </Description>

    <Images>
      <Image src="/circles.png" className="circles-image" alt="circles" />
      <Image src="/desktop.png" className="desktop-image" alt="desktop" />
    </Images>
  </Container>
);
