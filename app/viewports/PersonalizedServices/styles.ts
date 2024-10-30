import { mqMobile, mqTablet, mqTabletAndMobile } from '@/global-style';
import styled from 'styled-components';

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
    cursor: grab;
    left: 6.5rem;
    margin: 0;
    max-height: 12rem;
    max-width: 59%;
    overflow: hidden;
    position: absolute;
    top: 15rem;
    z-index: 3;

    ${mqTabletAndMobile} {
      left: 2.4rem;
      overflow: unset;
    }

    ${mqMobile} {
      top: 14rem;
      width: 60%;
    }

    ${mqTablet} {
      top: 13rem;
      width: 27.5%;
    }

    .slide-item {
      height: 12rem;
      margin-left: 8.7rem;
      width: 10rem;

      ${mqTabletAndMobile} {
        margin-left: 7.5rem;
      }

      ${mqMobile} {
        height: 8rem;
        width: 7rem;
      }

      ${mqTablet} {
        height: 9rem;
        width: 7rem;
      }
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
