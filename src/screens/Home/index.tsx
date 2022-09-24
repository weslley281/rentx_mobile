import React from 'react';
import { StatusBar } from 'react-native';
import Logo from '../../assets/logo.svg';
import { Container, Header, HeaderContentent, TotalCars } from './styles';
import { RFValue } from 'react-native-responsive-fontsize';
import { Car } from '../../components/Car';

export function Home() {
  const carData = {
    brand: 'Celta',
    name: 'Celta 2012 1.0',
    rent: {
      period: 'Ao dia',
      price: 60,
    },
    thumbnail:
      'https://media.gm.com/content/Pages/news/br/pt/2011/Feb/0202_celta/jcr:content/image.resize.maxw_600.jpg/1301066044243.jpg',
  };

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

      <Car data={carData} />
    </Container>
  );
}
