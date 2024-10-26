import { Image } from '../../components/Image';
import { ViewPortMainInfo } from '../../components/ViewportMainInfo';
import { powerfulFeatures } from '../../data/mock';
import * as S from './styles';

export const PersonalizedServices = () => (
  <S.Container>
    <S.Icons>
      <Image src="icons/mobile-app-personalized.svg" className="mobile-app" alt="mobile-app" />
      <Image src="icons/bg-personalized.svg" className="mobile-background" alt="background" />
    </S.Icons>

    <S.Infos>
      <ViewPortMainInfo
        topic="Services"
        title="Personalized services"
        description="Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit."
        data={powerfulFeatures}
      />
    </S.Infos>
  </S.Container>
);
