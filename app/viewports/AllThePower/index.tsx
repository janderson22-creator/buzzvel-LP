import styled from 'styled-components';
import { Button } from '../../components/Button';
import { Image } from '../../components/Image';
import Text from '../../components/Text';
import { ViewPortMainInfo } from '../../components/ViewportMainInfo';
import { mqMobile, mqTablet, mqTabletAndMobile } from '../../global-style';

const Container = styled.div`
  align-items: center;
  background: #7e22ce;
  display: flex;
  flex-direction: column;
  padding-bottom: 40rem;
  padding-top: 5rem;
  position: relative;

  ${mqMobile} {
    background: #581c87;
    padding-bottom: 19rem;
    padding-top: 0;
  }

  .title {
    color: #fff;

    ${mqTabletAndMobile} {
      text-align: center;
    }
  }

  .purple-ball {
    background: #a252ee;
    border-radius: 100%;
    height: 35rem;
    position: absolute;
    right: -5rem;
    top: -10rem;
    width: 35rem;
    z-index: 1;

    ${mqMobile} {
      bottom: -4rem;
      height: 15rem;
      left: -5rem;
      right: unset;
      top: unset;
      width: 15rem;
    }
  }

  .computer {
    height: 40rem;
    position: absolute;
    top: 15rem;
    width: 60rem;
    z-index: 2;

    ${mqMobile} {
      height: 20rem;
      width: 20rem;
    }
  }
`;

const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-left: 10rem;
  padding-right: 5rem;
  z-index: 2;

  ${mqMobile} {
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    padding: 0;
  }

  ${mqTablet} {
    flex-direction: column;
    padding: 0 2rem;
  }
`;

const ButtonContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .text-detail {
    color: #fff;
  }
`;

export const AllThePower = () => (
  <Container>
    <Header>
      <ViewPortMainInfo
        topic="Get the Sun to power your home"
        topicColor="yellow"
        title="All the power that you need for your house is now available"
      />

      <ButtonContainer>
        <Button $variant="secondary" />
        <Text className="text-detail">Egestas fringilla aliquam leo</Text>
      </ButtonContainer>
    </Header>
    <div className="purple-ball" />

    <Image src="icons/computer.svg" className="computer" alt="computer" />
  </Container>
);
