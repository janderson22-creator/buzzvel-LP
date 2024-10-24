import { GeneralInfos } from '../../components/GeneralInfos';
import { Image } from '../../components/Image';
import { personalizedServices } from '../../mock';
import * as S from './styles';

export const PowerfulFeatures = () => (
  <S.Container>
    <GeneralInfos
      topic="System features"
      title="Powerful features"
      description="Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit."
      data={personalizedServices}
    />

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
