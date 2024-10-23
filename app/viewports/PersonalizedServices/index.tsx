import { GeneralInfos } from '../../components/GeneralInfos';
import { Image } from '../../components/Image';
import * as S from './styles';

export const PersonalizedServices = () => {
  const data = [
    {
      title: 'Et mauris',
      subtitle:
        'Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique.',
    },
    {
      title: 'Eget sit',
      subtitle:
        'Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.',
    },
    {
      title: 'Imperdiet pellentesque',
      subtitle:
        'Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla.',
    },
    {
      title: 'Non libero',
      subtitle:
        'Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra.',
    },
  ];

  return (
    <S.Container>
      <S.Icons>
        <Image src="icons/mobile-app.svg" className="mobile-app" alt="mobile-app" />
        <Image
          src="icons/mobile-app-background.svg"
          className="mobile-app-background"
          alt="mobile-app-background"
        />
      </S.Icons>

      <GeneralInfos
        topic="Services"
        title="Personalized services"
        description="Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed."
        data={data}
      />
    </S.Container>
  );
};
