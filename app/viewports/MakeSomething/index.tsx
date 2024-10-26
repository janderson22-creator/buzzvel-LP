import { Button } from '../../components/Button';
import { ViewPortMainInfo } from '../../components/ViewportMainInfo';
import { SliderContain } from './slider';
import * as S from './styles';

export const MakeSomething = () => (
  <S.Container>
    <S.Header>
      <div className="info-wrapper">
        <ViewPortMainInfo
          topic="Join other Sun harvesters"
          topicColor="yellow"
          title="Make something awesome"
          description="Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique
          condimentum congue fusce nunc, donec magnis commodo."
        />
      </div>

      <Button $variant="secondary" />
    </S.Header>

    <SliderContain />
  </S.Container>
);
