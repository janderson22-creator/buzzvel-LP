import { styled } from 'styled-components';
import { mqMobile, mqTablet, mqTabletAndMobile } from '../../global-style';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 20rem;
  padding-bottom: 30rem;
  padding-top: 5rem;
  position: relative;

  ${mqTabletAndMobile} {
    margin-bottom: 15rem;
    padding-bottom: 4.4rem;
  }

  .orange-ball {
    background: #f59e0b;
    border-radius: 100%;
    bottom: -7rem;
    height: 40rem;
    left: -18rem;
    position: absolute;
    width: 40rem;

    ${mqTabletAndMobile} {
      height: 20rem;
      width: 20rem;
    }

    ${mqMobile} {
      bottom: -12rem;
      left: -13rem;
    }

    ${mqTablet} {
      bottom: -14rem;
      left: -10rem;
    }
  }

  .purple-ball {
    background: #7e22ce;
    border-radius: 100%;
    bottom: -6rem;
    height: 28rem;
    position: absolute;
    right: -5rem;
    width: 28rem;

    ${mqTabletAndMobile} {
      height: 16rem;
      width: 15rem;
    }

    ${mqMobile} {
      bottom: -13rem;
      right: -12rem;
    }

    ${mqTablet} {
      bottom: -20rem;
      right: -5rem;
    }
  }

  .desktop-web-image {
    bottom: -19rem;
    height: 100%;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    width: 80%;

    ${mqMobile} {
      display: none;
    }
  }

  .desktop-mob-image {
    display: none;

    ${mqMobile} {
      bottom: -17rem;
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

  ${mqTabletAndMobile} {
    padding: 0;
  }
`;
