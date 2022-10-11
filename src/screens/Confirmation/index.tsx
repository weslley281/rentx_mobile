import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';
import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import { Container, Content, Footer, Mensage, Title } from './styles';
import { ConfirmButton } from '../../components/ConfirmButton';
import { useNavigation, useRoute } from '@react-navigation/native';

interface Params {
  title: string;
  message: string;
  nextSreenRoute: string;
}

export function Confirmation() {
  const route = useRoute();
  const { width } = useWindowDimensions();
  const { navigate } = useNavigation<any>();
  const { title, message, nextSreenRoute } = route.params as Params;

  function handleConfirm() {
    navigate(nextSreenRoute);
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>{title}</Title>

        <Mensage>{message}</Mensage>
      </Content>

      <Footer>
        <ConfirmButton title="OK" onPress={handleConfirm} />
      </Footer>
    </Container>
  );
}
