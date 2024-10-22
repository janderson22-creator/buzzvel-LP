import styled from 'styled-components';
import { mqTabletAndMobile } from '../../global-style';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0;
  padding-left: 5rem;
  position: relative;

  ${mqTabletAndMobile} {
    padding: 0;
    padding-top: 20rem;
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
      width: 18rem;
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

  ${mqTabletAndMobile} {
    align-items: center;
    padding: 0 1rem;
  }

  .title {
    font-size: 4.5rem;

    ${mqTabletAndMobile} {
      font-size: 2.5rem;
      font-weight: 700;
      text-align: center;
    }
  }

  .description {
    ${mqTabletAndMobile} {
      line-height: 1.7rem;
      text-align: center;

      br {
        display: none;
      }
    }
  }
`;

export const Comment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 10rem;

  ${mqTabletAndMobile} {
    margin-top: 4rem;
  }

  .message {
    color: var(txt-0);
    font-size: 1.1rem;

    ${mqTabletAndMobile} {
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
