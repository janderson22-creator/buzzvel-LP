import { GeneralInfos } from '../../components/GeneralInfos';
import { Image } from '../../components/Image';
import { powerfulFeatures } from '../../mock';
import * as S from './styles';

export const PersonalizedServices = () => (
  <S.Container>
    <S.Icons>
      <Image src="icons/mobile-app-personalized.svg" className="mobile-app" alt="mobile-app" />
      <Image
        src="icons/background-personalized.svg"
        className="mobile-app-background"
        alt="mobile-app-background"
      />
    </S.Icons>

    <GeneralInfos
      topic="Services"
      title="Personalized services"
      description="Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit."
      data={powerfulFeatures}
    />
  </S.Container>
);
