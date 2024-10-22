import styled from 'styled-components';
import { mqMobile, mqTablet } from '../../global-style';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0;
  padding-left: 5rem;
  position: relative;

  ${mqMobile} {
    padding: 0;
    padding-top: 20rem;
  }

  ${mqTablet} {
    padding: 0.8rem;
    padding-top: 1rem;
  }

  .employee-image {
    height: 34rem;
    position: absolute;
    right: 0;
    top: -6.5rem;
    width: 34rem;
    z-index: 0;

    ${mqMobile} {
      height: 25rem;
      object-fit: contain;
      width: 18rem;
    }

    ${mqTablet} {
      height: 25rem;
      object-fit: contain;
      width: 20rem;
    }
  }

  .woman-image {
    height: 4rem;
    width: 4rem;
  }
`;

export const Infos = styled.div`
  align-items: left;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  ${mqMobile} {
    align-items: center;
    padding: 0 1rem;
  }

  .title {
    font-size: 4.5rem;

    ${mqMobile} {
      font-size: 2.5rem;
      font-weight: 700;
      text-align: center;
    }

    ${mqTablet} {
      font-size: 2.5rem;
      font-weight: 700;
    }
  }

  .description {
    ${mqMobile} {
      line-height: 1.7rem;
      text-align: center;

      br {
        display: none;
      }
    }

    ${mqTablet} {
      line-height: 1.5rem;
      width: 60%;
    }
  }
`;

export const Comment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 10rem;

  ${mqMobile} {
    margin-top: 4rem;
  }

  ${mqTablet} {
    margin-top: 3rem;
  }

  .message {
    color: var(txt-0);
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
