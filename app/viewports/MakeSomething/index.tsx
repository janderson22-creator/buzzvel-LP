import styled from 'styled-components';
import { Button } from '../../components/Button';
import { ViewPortMainInfo } from '../../components/ViewportMainInfo';
import { mqTabletAndMobile } from '../../global-style';
import { SliderContain } from './slider';

const Container = styled.div`
  background: #581c87;
  margin-top: 8rem;
  padding: 5rem 0;
  padding-bottom: 10rem;
  z-index: 2;

  ${mqTabletAndMobile} {
    padding: 0;
    padding-bottom: 10rem;
    padding-top: 3rem;
  }

  .text {
    font-size: 1.1rem;
  }

  .title,
  .description {
    color: #fff;
    ${mqTabletAndMobile} {
      text-align: center;
    }
  }

  .description {
    font-weight: 100;
    width: 70%;

    ${mqTabletAndMobile} {
      width: 100%;
    }
  }
`;

const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-left: 5rem;
  padding-right: 7.5rem;

  ${mqTabletAndMobile} {
    flex-direction: column;
    gap: 1.4rem;
    justify-content: center;
    padding-left: 0;
    padding-right: 0;
  }
`;

export const MakeSomething = () => (
  <Container>
    <Header>
      <ViewPortMainInfo
        topic="Join other Sun harvesters"
        topicColor="yellow"
        title="Make something awesome"
        description="Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique
          condimentum congue fusce nunc, donec magnis commodo."
      />

      <Button $variant="secondary" />
    </Header>

    <SliderContain />
  </Container>
);
