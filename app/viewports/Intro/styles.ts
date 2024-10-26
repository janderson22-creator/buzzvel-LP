import styled from 'styled-components';
import { mqMobile, mqTablet, mqTabletAndMobile } from '../../global-style';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0 0 5rem;
  position: relative;

  ${mqMobile} {
    padding: 20rem 0 0;
  }

  ${mqTablet} {
    padding: 1rem 0 0.8rem;
  }

  .employee-image {
    height: 34rem;
    position: absolute;
    right: 0;
    top: -6.5rem;
    width: 34rem;
    z-index: 0;

    ${mqTabletAndMobile} {
      height: 25rem;
      object-fit: contain;
    }

    ${mqMobile} {
      width: 18rem;
    }

    ${mqTablet} {
      width: 20rem;
    }
  }

  .user-image {
    height: 4rem;
    width: 4rem;
  }
`;

export const Infos = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  width: 50%;

  ${mqTabletAndMobile} {
    align-items: center;
  }

  ${mqMobile} {
    padding: 0 1rem;
    width: unset;
  }
`;

export const Comment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 5rem;

  ${mqMobile} {
    margin-top: 4rem;
  }

  ${mqTablet} {
    margin: 3rem 0 0 1.5rem;
  }

  .message {
    font-size: 1.1rem;

    ${mqMobile} {
      text-align: left;

      br {
        display: none;
      }
    }
  }
`;

export const Profile = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
`;

export const UserInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  .link {
    font-size: 1.1rem;
    opacity: 0.6;
  }
`;
