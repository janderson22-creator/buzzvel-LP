import styled from 'styled-components';
import { Button } from '../../components/Button';
import { Description } from '../../components/Description';
import Text from '../../components/Text';
import { Title } from '../../components/Title';
import { SliderContain } from './slider';

const Container = styled.div`
  background: #581c87;
  margin-top: 8rem;
  padding: 5rem 0;
  padding-bottom: 10rem;
  padding-left: 5rem;

  .text {
    color: #fcd34d;
    font-size: 1.1rem;
  }

  .title,
  .description {
    color: #fff;
  }

  .title {
    font-size: 3.5rem;
    margin-bottom: 1.2rem;
    margin-top: 0.5rem;
  }

  .description {
    line-height: 2.1rem;
  }
`;

const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-right: 7.5rem;
`;

export const MakeSomething = () => (
  <Container>
    <Header>
      <div>
        <Text className="text">Join other Sun harvesters</Text>
        <Title className="title">Make something awesome</Title>
        <Description className="description">
          Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique{' '}
          <br />
          condimentum congue fusce nunc, donec magnis commodo.
        </Description>
      </div>

      <Button $variant="secondary" />
    </Header>

    <SliderContain />
  </Container>
);
