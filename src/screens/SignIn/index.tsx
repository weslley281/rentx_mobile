import React from 'react';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import theme from '../../styles/theme';

import { Footer, Container, Header, SubTitle, Title } from './styles';

export function SignIn() {
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <Title>Estamos{'\n'}quase lá</Title>
        <SubTitle>
          Faça seu login para começar{'\n'}uma experiência incrível
        </SubTitle>
      </Header>

      <Footer>
        <Button title="Login" onPress={() => {}} loading={false} />

        <Button
          title="Criar uma conta gratuita"
          onPress={() => {}}
          loading={false}
          enabled={true}
          light
          color={theme.colors.background_secondary}
        />
      </Footer>
    </Container>
  );
}
