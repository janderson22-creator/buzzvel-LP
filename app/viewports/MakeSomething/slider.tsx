import { MouseEventHandler } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { Image } from '../../components/Image';
import { Text } from '../../components/Text';
import { makeSomething } from '../../data/makeSomething';
import { mqTabletAndMobile } from '../../global-style';

const Container = styled.div`
  padding-left: 3rem;

  ${mqTabletAndMobile} {
    padding-left: 0;
  }

  .slider-container {
    margin-top: 6.5rem;

    ${mqTabletAndMobile} {
      margin-top: 4rem;
    }

    .slick-prev::before,
    .slick-next::before {
      display: none;
    }
  }

  .slick-list {
    max-height: 23rem;
    padding-top: 1rem;

    ${mqTabletAndMobile} {
      max-height: 25rem;
      padding-bottom: 1rem;
    }
  }

  .arrow {
    height: 3rem;
    width: 3rem;
  }
`;

const Card = styled.div`
  background: var(--txt-2);
  border-radius: 0.6rem;
  margin-left: 1.5rem;
  max-width: 21rem;
  min-width: 21rem;
  padding: 3rem 2rem 2rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  ${mqTabletAndMobile} {
    margin-left: 0.8rem;

    &:hover {
      transform: none;
    }
  }

  .comment {
    font-size: 1.1rem;
    line-height: 1.5rem;
  }
`;

const UserInfo = styled.div`
  align-items: center;
  display: flex;
  margin-top: 1.2rem;

  .profile-image {
    border-radius: 100%;
    height: 4rem;
    width: 4rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-left: 1rem;
  }

  .user-name {
    color: var(--txt-0);
    font-size: 1.1rem;
  }

  .kwh {
    opacity: 0.7;
  }
`;

const ArrowWrapper = styled.div`
  align-items: center;
  bottom: -6rem;
  cursor: pointer;
  display: flex;
  height: 3rem;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 3rem;
  z-index: 2;

  ${mqTabletAndMobile} {
    bottom: -6rem;
    left: 0;
    margin: auto;
    right: 0;
  }

  &.left {
    left: 1.3rem;
    top: unset;

    ${mqTabletAndMobile} {
      left: 0;
      right: 4rem;
    }
  }

  &.right {
    left: 5.3rem;
    right: unset;
    top: unset;

    ${mqTabletAndMobile} {
      left: 4rem;
      right: 0;
    }
  }
`;

const Arrow = ({ side, className, onClick }: ArrowProps) => (
  <ArrowWrapper className={`${className} ${side}`} onClick={onClick}>
    <Image src={`icons/arrow-${side}.svg`} alt={`arrow-${side}`} className="arrow" />
  </ArrowWrapper>
);

const settings = {
  slidesToShow: 4,
  slidesToScroll: 2,
  variableWidth: true,
  prevArrow: <Arrow side="left" />,
  nextArrow: <Arrow side="right" />,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const SliderContain = () => (
  <Container>
    <Slider {...settings} className="slider-container">
      {makeSomething.testimonials.map(({ name, comment, image, kwh }) => (
        <Card key={name}>
          <Text className="comment" tag="p">
            {comment}
          </Text>

          <UserInfo>
            <Image src={image} alt={name} className="profile-image" />
            <div className="user-details">
              <Text className="user-name">{name}</Text>
              <Text className="kwh">{kwh}KWh</Text>
            </div>
          </UserInfo>
        </Card>
      ))}
    </Slider>
  </Container>
);

type ArrowProps = {
  side: 'right' | 'left';
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
};
