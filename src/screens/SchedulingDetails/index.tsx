import React from 'react';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import {
  Accessories,
  Brand,
  CalendarIcon,
  CarImages,
  Container,
  Content,
  DateInfo,
  DateTitle,
  DateValue,
  Description,
  Details,
  Footer,
  Header,
  Name,
  Period,
  Price,
  Rent,
  RentalPeriod,
  RentalPrice,
  RentalPriceDetail,
  RentalPriceLabel,
  RentalPriceQuote,
  RentalPriceTotal,
} from './styles';

import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';
import { Button } from '../../components/Button';
import { RFValue } from 'react-native-responsive-fontsize';

export function SchedulingDetails() {
  const theme = useTheme();

  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={[
            'https://media.gm.com/content/Pages/news/br/pt/2011/Feb/0202_celta/jcr:content/image.resize.maxw_600.jpg/1301066044243.jpg',
          ]}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Celta</Brand>
            <Name>Celta 2012 1.0</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 60.00</Price>
          </Rent>
        </Details>

        <Accessories>
          <Accessory name="120Km/h" icon={SpeedSvg} />
          <Accessory name="1.2s" icon={AccelerationSvg} />
          <Accessory name="200 HP" icon={ForceSvg} />
          <Accessory name="Gasoline" icon={GasolineSvg} />
          <Accessory name="Auto" icon={ExchangeSvg} />
          <Accessory name="5 pessoas" icon={PeopleSvg} />
        </Accessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue>18/06/2023</DateValue>
          </DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text}
          />

          <DateInfo>
            <DateTitle>Até</DateTitle>
            <DateValue>18/06/2023</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>Total</RentalPriceLabel>
          <RentalPriceDetail>
            <RentalPriceQuote>R$ 360.00 3x diária</RentalPriceQuote>
            <RentalPriceTotal>R$ 10000,00</RentalPriceTotal>
          </RentalPriceDetail>
        </RentalPrice>
      </Content>

      <Footer>
        <Button title="Alugar" />
      </Footer>
    </Container>
  );
}
