import styled from 'styled-components';
import { mqTabletAndMobile } from '../../global-style';
import { Description } from '../Description';
import Text from '../Text';
import { Title } from '../Title';

const Infos = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
`;

const Header = styled.div`
  ${mqTabletAndMobile} {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .text {
    color: var(--quaternary-color);
    font-size: 1.2rem;
    font-weight: 500;

    ${mqTabletAndMobile} {
      font-size: 1rem;
    }
  }

  .title {
    font-size: 3.5rem;
    margin-bottom: 1.3rem;
    margin-top: 0.5rem;

    ${mqTabletAndMobile} {
      font-size: 2rem;
    }
  }

  .description {
    ${mqTabletAndMobile} {
      text-align: center;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 2.5rem;
`;

const GridItem = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  padding-top: 5rem;

  ${mqTabletAndMobile} {
    align-items: center;
  }

  p {
    margin: 0.5rem 0;

    ${mqTabletAndMobile} {
      text-align: center;
    }
  }

  strong {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
`;

type Props = {
  topic: string;
  title: string;
  description: string;
  data: { title: string; subtitle: string }[];
};

export const GeneralInfos = ({ topic, title, description, data }: Props) => (
  <Infos>
    <Header>
      <Text className="text">{topic}</Text>
      <Title className="title">{title}</Title>
      <Description className="description">{description}</Description>
    </Header>

    <Grid>
      {data.map((item) => (
        <GridItem key={item.title}>
          <Text>
            <strong>{item.title}</strong>
          </Text>
          <Text tag="p">{item.subtitle}</Text>
        </GridItem>
      ))}
    </Grid>
  </Infos>
);
