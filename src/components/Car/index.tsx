import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import GasolineSVG from '../../assets/gasoline.svg';
import { CarDTO } from '../../dtos/CarDTO';
import { getAccessoriesIcon } from '../../utils/getAccessoriesIcon';

import {
  About,
  Brand,
  CarImage,
  Container,
  Details,
  Name,
  Period,
  Price,
  Rent,
  Type,
} from './styles';

interface Props extends RectButtonProps {
  data: CarDTO;
}

export function Car({ data, ...rest }: Props) {
  const MotorIcon = getAccessoriesIcon(data.fuel_type);
  console.log(data.fuel_type);

  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.period}</Period>
            <Price>R$ {data.price}</Price>
          </Rent>

          <Type>
            <MotorIcon />
          </Type>
        </About>
      </Details>

      <CarImage
        source={{
          uri: data.thumbnail,
        }}
      />
    </Container>
  );
}
