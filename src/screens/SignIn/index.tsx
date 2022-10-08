import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';
import theme from '../../styles/theme';

import { Footer, Container, Header, SubTitle, Title, Form } from './styles';

export function SignIn() {
  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
            <Input iconName="mail" placeholder="Digite seu Email" />

            <PasswordInput iconName="key" placeholder="Digite sua Senha" />
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
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
