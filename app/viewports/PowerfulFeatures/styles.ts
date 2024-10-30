import { mqMobile, mqTablet, mqTabletAndMobile } from '@/global-style';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding-left: 5rem;
  padding-top: 6rem;

  ${mqTabletAndMobile} {
    flex-direction: column;
    padding: 0;
    padding-bottom: 29rem;
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
    bottom: 1rem;
    margin: 0;
    max-height: 10rem;
    overflow: hidden;
    position: absolute;
    right: 5rem;
    width: 55%;
    z-index: 3;

    ${mqTabletAndMobile} {
      bottom: unset;
      overflow: unset;
    }

    ${mqMobile} {
      right: 2.5rem;
      top: 24rem;
      width: 54%;
    }

    ${mqTablet} {
      right: 2.5rem;
      top: 24rem;
      width: 25%;
    }

    .slide-item {
      cursor: grab;
      height: 6rem;
      width: 6rem;

      ${mqTabletAndMobile} {
        height: 5rem;
        width: 5rem;
      }
    }
  }

  ${mqTabletAndMobile} {
    width: 100%;
  }

  .mobile-app,
  .mobile-background {
    height: 40rem;
    position: absolute;
    width: 40rem;
  }

  .mobile-app {
    right: -7rem;
    top: 2rem;
    z-index: 1;

    ${mqTabletAndMobile} {
      height: 30rem;
      right: -6rem;
      top: 5rem;
      width: 30rem;
    }
  }

  .mobile-background {
    right: -5rem;
    top: -2rem;

    ${mqTabletAndMobile} {
      height: 31rem;
      right: -6rem;
      top: 2rem;
      width: 31rem;
    }
  }
`;

export const Infos = styled.div`
  margin-top: 3rem;
`;
