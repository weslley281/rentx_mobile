import React from 'react';
import { BackButton } from '../../components/BackButton';
import { useTheme } from 'styled-components';
import ArrowSvg from '../../assets/arrow.svg';

import {
  Container,
  Content,
  DateInfo,
  DateTitle,
  DateValue,
  Footer,
  Header,
  RentalPeriod,
  Title,
} from './styles';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';

export function Scheduling() {
  const theme = useTheme();

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButton color={theme.colors.shape} onPress={() => {}} />

        <Title>
          Excolha uma{'\n'}data para início e{'\n'}termino do Aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue selected={true}>10/09/2022</DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>Até</DateTitle>
            <DateValue selected={false}>10/09/2022</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content></Content>

      <Footer>
        <Button title="Confirmar" />
      </Footer>
    </Container>
  );
}
