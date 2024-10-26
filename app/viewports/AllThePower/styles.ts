import styled from 'styled-components';
import { mqMobile, mqTablet } from '../../global-style';

export const Container = styled.div`
  align-items: center;
  background: var(--bg-1);
  display: flex;
  flex-direction: column;
  padding: 5rem 0 40rem;
  position: relative;

  ${mqMobile} {
    background: var(--primary-color);
    overflow: hidden;
    padding: 0 0 33rem;
  }

  .purple-ball {
    background: var(--bg-2);
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

  .computer-image {
    height: 40rem;
    position: absolute;
    top: 15rem;
    width: 60rem;
    z-index: 2;

    ${mqMobile} {
      height: 20rem;
      width: 20rem;
    }
    ${mqTablet} {
      width: 40rem;
    }
  }
`;

export const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0 10rem 0 5rem;
  z-index: 2;

  ${mqMobile}, ${mqTablet} {
    flex-direction: column;
  }

  ${mqMobile} {
    justify-content: center;
    padding: 0;
  }

  ${mqTablet} {
    padding: 0 2rem;
  }
`;

export const ButtonGroup = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .text-detail {
    color: var(--txt-2);
  }
`;
