import styled from 'styled-components';
import { mqTabletAndMobile } from '../../global-style';
import { Description } from '../Description';
import Text from '../Text';
import { Title } from '../Title';

const Infos = styled.div`
  display: flex;
  flex-direction: column;

  ${mqTabletAndMobile} {
    padding: 0 1rem;
  }
`;

const Header = styled.div<{ $topicColor: 'yellow' | 'brown'; $alignItems: string }>`
  align-items: ${({ $alignItems }) => $alignItems};
  display: flex;
  flex-direction: column;

  ${mqTabletAndMobile} {
    align-items: center;
  }

  .text {
    color: ${({ $topicColor }) =>
      $topicColor === 'yellow' ? '#fcd34d' : 'var(--quaternary-color)'};
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
    line-height: 2.2rem;
    text-align: ${({ $alignItems }) => $alignItems};

    .align-items {
      text-align: center;
    }

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
  topic?: string;
  topicColor?: 'yellow' | 'brown';
  title: string;
  description?: string;
  data?: { title: string; subtitle: string }[];
  alignItems?: 'center' | 'left';
};

export const ViewPortMainInfo = ({
  topic,
  topicColor = 'brown',
  title,
  description,
  data,
  alignItems = 'left',
}: Props) => (
  <Infos>
    <Header $topicColor={topicColor} $alignItems={alignItems}>
      {topic && <Text className="text">{topic}</Text>}
      <Title className="title">{title}</Title>
      {description && <Description className="description">{description}</Description>}
    </Header>

    {data && (
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
    )}
  </Infos>
);
