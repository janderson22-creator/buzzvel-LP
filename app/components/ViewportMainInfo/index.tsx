import { AnimatedBlock } from '@/components/AnimatedBlock';
import { Description } from '@/components/Description';
import { Text } from '@/components/Text';
import { Title } from '@/components/Title';
import { mqTabletAndMobile } from '@/global-style';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styled from 'styled-components';

const Infos = styled.div`
  display: flex;
  flex-direction: column;

  ${mqTabletAndMobile} {
    padding: 0 1rem;
  }
`;

const Header = styled.div<{ $titleLevel: string; $topicColor: string; $alignItems: string }>`
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
    font-size: ${({ $titleLevel }) => ($titleLevel === 'h2' ? '3.5rem' : '4rem')};
    font-weight: 800;
    margin: 0.5rem 0 1.3rem;
    max-width: ${({ $titleLevel }) => $titleLevel === 'h1' && '38rem'};

    ${mqTabletAndMobile} {
      font-size: ${({ $titleLevel }) => ($titleLevel === 'h2' ? '2rem' : '2.5rem')};
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
  titleLevel?: 'h1' | 'h2';
};

export const ViewPortMainInfo = ({
  topic,
  topicColor = 'brown',
  title,
  description,
  data,
  alignItems = 'left',
  titleLevel = 'h2',
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Infos ref={ref}>
      <Header $titleLevel={titleLevel} $topicColor={topicColor} $alignItems={alignItems}>
        {topic && (
          <AnimatedBlock isVisible={isInView}>
            <Text className="topic">{topic}</Text>
          </AnimatedBlock>
        )}
        <AnimatedBlock isVisible={isInView}>
          <Title titleLevel={titleLevel} className="title">
            {title}
          </Title>
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
