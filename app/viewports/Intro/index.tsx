'use client';

import { Button } from '../../components/Button';
import { Description } from '../../components/Description';
import { Image } from '../../components/Image';
import Text from '../../components/Text';
import { Title } from '../../components/Title';
import * as S from './styles';

export const Intro = () => (
  <S.Container>
    <S.Infos>
      <Title className="title">
        Get the Sun to <br /> Power Your Home
      </Title>
      <Description className="description">
        Viverra viverra nibh enim et aliquam, enim. Tempor, sit <br /> mus viverra orci dui
        consequat turpis scelerisque.
      </Description>

      <Button $variant="primary" />

      <S.Comment>
        <Text tag="p" className="message">
          “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui <br />
          consequat turpis scelerisque faucibus.”
        </Text>
        <S.Profile>
          <Image src="/woman-profile.webp" className="woman-image" alt="employee-working" />
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
