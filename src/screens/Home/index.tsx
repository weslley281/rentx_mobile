import React from 'react';
import { StatusBar } from 'react-native';
import Logo from '../../assets/logo.svg';
import { Container, Header, HeaderContentent, TotalCars } from './styles';
import { RFValue } from 'react-native-responsive-fontsize';

export function Home() {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Header>
        <HeaderContentent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContentent>
      </Header>
    </Container>
  );
}
