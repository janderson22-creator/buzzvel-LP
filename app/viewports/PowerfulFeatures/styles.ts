import styled from 'styled-components';
import { mqTabletAndMobile } from '../../global-style';

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
