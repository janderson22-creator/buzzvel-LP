import styled from 'styled-components';
import { mqTabletAndMobile } from '../../global-style';

export const Container = styled.div`
  display: flex;
  padding-right: 5rem;
  padding-top: 6rem;

  ${mqTabletAndMobile} {
    flex-direction: column-reverse;
    margin-bottom: 35rem;
    padding-right: unset;
    padding-top: 2rem;
  }
`;

export const Icons = styled.div`
  position: relative;
  width: 70%;

  .slick-prev::before,
  .slick-next::before {
    display: none;
  }

  .slider-container {
    bottom: 0;
    left: 6rem;
    margin: 0;
    max-height: 12rem;
    overflow: hidden;
    position: absolute;
    top: 15rem;
    width: 62%;
    z-index: 3;

    .slide-item {
      height: 12rem;
      width: 10rem;
    }
  }

  ${mqTabletAndMobile} {
    width: 100%;
  }

  .mobile-app,
  .mobile-background {
    height: 40rem;
    left: -5rem;
    position: absolute;
    width: 40rem;
  }

  .mobile-app {
    top: 2rem;
    z-index: 1;
    ${mqTabletAndMobile} {
      height: 30rem;
      left: -6rem;
      top: 4rem;
      width: 30rem;
    }
  }

  .mobile-background {
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
