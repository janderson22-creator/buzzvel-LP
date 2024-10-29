import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styled from 'styled-components';
import { mqTabletAndMobile } from '../../global-style';
import { AnimatedBlock } from '../Animation';
import { Description } from '../Description';
import { Text } from '../Text';
import { Title } from '../Title';

const Infos = styled.div`
  display: flex;
  flex-direction: column;

  ${mqTabletAndMobile} {
    padding: 0 1rem;
  }
`;

const Header = styled.div<{ $titleSize: string; $topicColor: string; $alignItems: string }>`
  align-items: ${({ $alignItems }) => $alignItems};
  display: flex;
  flex-direction: column;

  ${mqTabletAndMobile} {
    align-items: center;
  }

  .topic {
    color: ${({ $topicColor }) => ($topicColor === 'yellow' ? '#fcd34d' : 'var(--color-4)')};
    font-size: 1.2rem;
    font-weight: 500;

    ${mqTabletAndMobile} {
      font-size: 1rem;
    }
  }

  .title {
    color: ${({ $topicColor }) => ($topicColor === 'yellow' ? 'var(--txt-2)' : 'var(--txt-0)')};
    font-size: ${({ $titleSize }) => ($titleSize === 'small' ? '3.5rem' : '4.5rem')};
    font-weight: 800;
    margin: 0.5rem 0 1.3rem;

    ${mqTabletAndMobile} {
      font-size: ${({ $titleSize }) => ($titleSize === 'small' ? '2rem' : '2.5rem')};
      font-weight: 700;
      text-align: center;
    }
  }

  .description {
    color: ${({ $topicColor }) => ($topicColor === 'yellow' ? 'var(--txt-2)' : 'var(--txt-0)')};
    line-height: 2.2rem;
    text-align: ${({ $alignItems }) => $alignItems};

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
  titleSize?: 'small' | 'large';
};

export const ViewPortMainInfo = ({
  topic,
  topicColor = 'brown',
  title,
  description,
  data,
  alignItems = 'left',
  titleSize = 'small',
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Infos ref={ref}>
      <Header $titleSize={titleSize} $topicColor={topicColor} $alignItems={alignItems}>
        {topic && (
          <AnimatedBlock isVisible={isInView}>
            <Text className="topic">{topic}</Text>
          </AnimatedBlock>
        )}
        <AnimatedBlock isVisible={isInView}>
          <Title className="title">{title}</Title>
        </AnimatedBlock>

        {description && (
          <AnimatedBlock isVisible={isInView}>
            <Description className="description">{description}</Description>
          </AnimatedBlock>
        )}
      </Header>

      {data && (
        <Grid>
          {data.map((item) => (
            <AnimatedBlock key={item.title} isVisible={isInView}>
              <GridItem>
                <Text>
                  <strong>{item.title}</strong>
                </Text>
                <Text tag="p">{item.subtitle}</Text>
              </GridItem>
            </AnimatedBlock>
          ))}
        </Grid>
      )}
    </Infos>
  );
};
