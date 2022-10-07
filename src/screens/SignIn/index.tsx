import React from 'react';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import theme from '../../styles/theme';

import { Footer, Container, Header, SubTitle, Title, Form } from './styles';

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

      <Form>
        <Input iconName="mail" />
      </Form>

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
