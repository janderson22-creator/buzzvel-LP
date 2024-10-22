import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0;
  padding-left: 5rem;
  position: relative;

  .employee-image {
    height: 34rem;
    position: absolute;
    right: 0;
    top: -6.5rem;
    width: 34rem;
    z-index: 0;
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
`;

export const Comment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 10rem;

  .message {
    color: var(txt-0);
    font-size: 1.1rem;
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