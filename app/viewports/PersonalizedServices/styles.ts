import styled from 'styled-components';
import { mqTabletAndMobile } from '../../global-style';

export const Container = styled.div`
  display: flex;
  padding-right: 5rem;
  padding-top: 2rem;

  ${mqTabletAndMobile} {
    flex-direction: column-reverse;
    margin-bottom: 35rem;
    padding-right: unset;
  }
`;

export const Icons = styled.div`
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

export const Infos = styled.div`
  margin-top: 5rem;
`;
