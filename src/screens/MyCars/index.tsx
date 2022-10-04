import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';
import { CarDTO } from '../../dtos/CarDTO';
import { api } from '../../services/api';
import { NavigationProps } from '../../dtos/NavigationDTO';
import { Container, Header, SubTitle, Title } from './styles';
import { useNavigation } from '@react-navigation/core';

interface Params extends NavigationProps {
  car: CarDTO;
  goBack: () => void;
}

export function MyCars() {
  const theme = useTheme();
  const navigation = useNavigation<Params>();
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  function handleBack() {
    navigation.goBack();
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/schedules_byuser?user_id=1');

        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  });

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButton color={theme.colors.shape} onPress={handleBack} />

        <Title>
          Excolha uma{'\n'}data para início e{'\n'}termino do Aluguel
        </Title>

        <SubTitle>Conforto e segurança</SubTitle>
      </Header>
    </Container>
  );
}
