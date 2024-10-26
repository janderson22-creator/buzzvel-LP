import styled from 'styled-components';
import { mqTabletAndMobile } from '../../global-style';

export const Container = styled.div`
  background: var(--primary-color);
  margin-top: 8rem;
  padding: 5rem 0 10rem;
  z-index: 2;

  ${mqTabletAndMobile} {
    padding: 3rem 0 10rem;
  }
`;

export const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0 7.5rem 0 5rem;

  ${mqTabletAndMobile} {
    flex-direction: column;
    gap: 1.4rem;
    justify-content: center;
    padding: 0;
  }

  .info-wrapper {
    width: 70%;

    ${mqTabletAndMobile} {
      width: unset;
    }
  }
`;
