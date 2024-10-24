import { Image } from '../../components/Image';
import { ViewPortMainInfo } from '../../components/ViewportMainInfo';
import { personalizedServices } from '../../data/mock';
import * as S from './styles';

export const PowerfulFeatures = () => (
  <S.Container>
    <S.Infos>
      <ViewPortMainInfo
        topic="System features"
        title="Powerful features"
        description="Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit."
        data={personalizedServices}
      />
    </S.Infos>

    <S.Icons>
      <Image src="icons/mobile-app-powerful.svg" className="mobile-app" alt="mobile-app" />
      <Image
        src="icons/background-powerful.svg"
        className="mobile-app-background"
        alt="mobile-app-background"
      />
    </S.Icons>
  </S.Container>
);
