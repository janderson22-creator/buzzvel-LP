import styled from 'styled-components';
import { mqTabletAndMobile } from '../../global-style';

export const Container = styled.div`
  display: flex;
  padding-left: 5rem;
  padding-top: 6rem;

  ${mqTabletAndMobile} {
    flex-direction: column;
    padding: 0;
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
    position: absolute;
    right: -7rem;
    top: 2rem;
    width: 40rem;
    z-index: 1;

    ${mqTabletAndMobile} {
      height: 30rem;
      right: -6rem;
      top: 5rem;
      width: 30rem;
    }
  }

  .mobile-app-background {
    height: 40rem;
    position: absolute;
    right: -5rem;
    top: -2rem;
    width: 40rem;

    ${mqTabletAndMobile} {
      height: 31rem;
      right: -6rem;
      top: 2rem;
      width: 31rem;
    }
  }
`;
