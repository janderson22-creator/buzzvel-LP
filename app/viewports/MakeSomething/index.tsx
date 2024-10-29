import { Button } from '../../components/Button';
import { ViewPortMainInfo } from '../../components/ViewportMainInfo';
import { makeSomething } from '../../data';
import { SliderContain } from './slider';
import * as S from './styles';

export const MakeSomething = () => (
  <S.Container id="configure">
    <S.Header>
      <div className="info-wrapper">
        <ViewPortMainInfo
          topicColor="yellow"
          topic={makeSomething.topic}
          title={makeSomething.title}
          description={makeSomething.description}
        />
      </div>

      <Button variant="secondary" />
    </S.Header>

    <SliderContain />
  </S.Container>
);
