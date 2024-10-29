import { Button } from '../../components/Button';
import { Image } from '../../components/Image';
import { Text } from '../../components/Text';
import { ViewPortMainInfo } from '../../components/ViewportMainInfo';
import { allThePower } from '../../data';
import * as S from './styles';

export const AllThePower = () => (
  <S.Container>
    <S.Header>
      <ViewPortMainInfo topicColor="yellow" topic={allThePower.topic} title={allThePower.title} />

      <S.ButtonGroup>
        <Button variant="secondary" />
        <Text className="text-detail">{allThePower.description}</Text>
      </S.ButtonGroup>
    </S.Header>
    <div className="purple-ball" />

    <Image src="icons/computer.svg" className="computer-image" alt="computer" />
  </S.Container>
);
