import React, { useEffect, useState } from 'react';
import { FlatList, StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';
import { CarDTO } from '../../dtos/CarDTO';
import { api } from '../../services/api';
import { NavigationProps } from '../../dtos/NavigationDTO';
import {
  Appointments,
  AppointmentsQuantity,
  AppointmentsTitle,
  CarFooter,
  CarFooterDate,
  CarFooterPeriod,
  CarFooterTitle,
  CarWraper,
  Container,
  Content,
  Header,
  SubTitle,
  Title,
} from './styles';
import { useNavigation } from '@react-navigation/core';
import { Car } from '../../components/Car';
import { AntDesign } from '@expo/vector-icons';
import { CarCard } from '../../components/CarCard';

interface Params extends NavigationProps {
  car: CarDTO;
  goBack: () => void;
}

interface CarProps {
  id: string;
  user_id: string;
  car: CarDTO;
  start_date: string;
  end_date: string;
}

export function MyCars() {
  const theme = useTheme();
  const navigation = useNavigation<Params>();
  const [cars, setCars] = useState<CarProps[]>([]);
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

      <Content>
        <Appointments>
          <AppointmentsTitle>Agendamentos Deitos</AppointmentsTitle>
          <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
        </Appointments>
      </Content>

      <FlatList
        data={cars}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <CarWraper>
            <CarCard data={item.car} />
            <CarFooter>
              <CarFooterTitle>{'Período'}</CarFooterTitle>

              <CarFooterPeriod>
                <CarFooterDate>{item.start_date}</CarFooterDate>
                <AntDesign
                  name="arrowright"
                  size={20}
                  color={theme.colors.text_detail}
                  style={{ marginHorizontal: 10 }}
                />
                <CarFooterDate>{item.end_date}</CarFooterDate>
              </CarFooterPeriod>
            </CarFooter>
          </CarWraper>
        )}
      />
    </Container>
  );
}
