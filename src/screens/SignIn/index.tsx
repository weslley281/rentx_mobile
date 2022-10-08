import React, { useState } from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';
import theme from '../../styles/theme';
import * as Yup from 'yup';

import { Footer, Container, Header, SubTitle, Title, Form } from './styles';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

export function SignIn() {
  // const { signIn } = useAuth();
  const { colors } = useTheme();
  const { navigate } = useNavigation<any>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn() {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Email obrigatório')
          .email('Digite um email válido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate({ email, password });

      // signIn({ email, password });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert('Atenção!', error.message);
      } else {
        Alert.alert('Atenção!', error.message);
      }
    }
  }

  function hanldeNewAccount() {
    navigate('StepOne');
  }

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
            <Input
              iconName="mail"
              placeholder="Digite seu Email"
              value={email}
              onChangeText={setEmail}
            />

            <PasswordInput
              iconName="key"
              placeholder="Digite sua Senha"
              value={password}
              onChangeText={setPassword}
            />
          </Form>

          <Footer>
            <Button title="Login" onPress={() => {}} loading={false} />

            <Button
              title="Criar uma conta gratuita"
              onPress={hanldeNewAccount}
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
