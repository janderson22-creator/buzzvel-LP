import { mqMobile, mqTablet, mqTabletAndMobile } from '@/global-style';
import { styled } from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
`;

export const Images = styled.div`
  height: 40rem;
  position: relative;
  width: 100%;

  .text {
    margin: auto;
    position: absolute;
    text-align: center;
    top: 3.1rem;
    width: 100%;
    z-index: 10;
  }

  ${mqTabletAndMobile} {
    height: 20rem;
  }

  .orange-ball,
  .purple-ball {
    border-radius: 50%;
    position: absolute;
  }

  .orange-ball {
    background: var(--bg-0);
    height: 30rem;
    left: -10rem;
    top: -4rem;
    width: 30rem;

    ${mqTabletAndMobile} {
      height: 15rem;
      top: -3rem;
      width: 15rem;
    }

    ${mqMobile} {
      left: -10rem;
    }

    ${mqTablet} {
      left: -5rem;
    }
  }

  .purple-ball {
    background: var(--bg-1);
    height: 26rem;
    right: -2rem;
    top: 5rem;
    width: 26rem;

    ${mqTabletAndMobile} {
      height: 16rem;
      top: -1rem;
      width: 15rem;
    }

    ${mqMobile} {
      right: -12rem;
    }

    ${mqTablet} {
      right: -5rem;
    }
  }

  .image-desktop {
    height: 100%;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    top: 2rem;
    width: 80%;

    ${mqMobile} {
      display: none;
    }
  }

  .image-mobile {
    display: none;

    ${mqMobile} {
      bottom: 0;
      display: block;
      height: 18rem;
      position: absolute;
      right: 0;
      width: 22rem;
    }
  }
`;

export const Infos = styled.div`
  padding: 0 15rem;
  z-index: 2;

  ${mqTabletAndMobile} {
    padding: 0;
  }
`;
