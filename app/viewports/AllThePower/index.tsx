import { Button } from '../../components/Button';
import { Image } from '../../components/Image';
import { Text } from '../../components/Text';
import { ViewPortMainInfo } from '../../components/ViewportMainInfo';
import * as S from './styles';

export const AllThePower = () => (
  <S.Container>
    <S.Header>
      <ViewPortMainInfo
        topic="Get the Sun to power your home"
        topicColor="yellow"
        title="All the power that you need for your house is now available"
      />

      <S.ButtonGroup>
        <Button $variant="secondary" />
        <Text className="text-detail">Egestas fringilla aliquam leo</Text>
      </S.ButtonGroup>
    </S.Header>
    <div className="purple-ball" />

    <Image src="icons/computer.svg" className="computer-image" alt="computer" />
  </S.Container>
);
