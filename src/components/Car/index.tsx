import React from 'react';
import GasolineSVG from '../../assets/gasoline.svg';

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

export function Car() {
  return (
    <Container>
      <Details>
        <Brand>Audi</Brand>
        <Name>RS 5 Coupé</Name>

        <About>
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 120,00</Price>
          </Rent>

          <Type>
            <GasolineSVG />
          </Type>
        </About>
      </Details>

      <CarImage source={{ uri: '' }} />
    </Container>
  );
}
