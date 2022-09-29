import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Logo from '../../assets/logo.svg';
import {
  CarList,
  Container,
  Header,
  HeaderContentent,
  TotalCars,
} from './styles';
import { RFValue } from 'react-native-responsive-fontsize';
import { Car } from '../../components/Car';
import { api } from '../../services/api';

export function Home() {
  const navigation = useNavigation();

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

  function handleCarDetails() {
    navigation.navigate('CarDetails');
  }

  useEffect(() => {}, []);

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

      <CarList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => (
          <Car data={carData} onPress={handleCarDetails} />
        )}
      />
    </Container>
  );
}
