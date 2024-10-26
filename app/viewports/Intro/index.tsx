'use client';

import { Button } from '../../components/Button';
import { Image } from '../../components/Image';
import Text from '../../components/Text';
import { ViewPortMainInfo } from '../../components/ViewportMainInfo';
import * as S from './styles';

export const Intro = () => (
  <S.Container>
    <S.Infos>
      <ViewPortMainInfo
        title="Get the Sun to Power Your Home"
        titleSize="large"
        description="Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui
        consequat turpis scelerisque."
      />
      <Button $variant="primary" />

      <S.Comment>
        <Text tag="p" className="message">
          “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui <br />
          consequat turpis scelerisque faucibus.”
        </Text>
        <S.Profile>
          <Image src="/woman-profile.webp" className="user-image" alt="employee-working" />
          <S.UserInfos>
            <Text tag="span">Rwanda Melflor</Text>
            <Text tag="span" className="link">
              zerowaste.com
            </Text>
          </S.UserInfos>
        </S.Profile>
      </S.Comment>
    </S.Infos>
    <Image src="/employee.webp" className="employee-image" alt="employee-working" />
  </S.Container>
);
