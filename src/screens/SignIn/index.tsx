import React, { useState } from 'react';
import {
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import { useTheme } from 'styled-components';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/auth';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';

import {
  Container,
  Header,
  Title,
  Subtitle,
  Buttons,
  Form,
  Separator,
} from './styles';

export const SignIn: React.FC = () => {
  const { signIn } = useAuth();
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

      signIn({ email, password });
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
    <KeyboardAvoidingView behavior="position">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="light-content"
          />

          <Header>
            <Title>{'Estamos\nquase lá.'}</Title>
            <Subtitle>
              {'Faça seu login para começar\numa experiência incrível.'}
            </Subtitle>
          </Header>

          <Form>
            <Input
              iconName="mail"
              placeholder="Email"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />

            <PasswordInput
              iconName="lock"
              placeholder="Senha"
              value={password}
              onChangeText={setPassword}
            />
          </Form>

          <Buttons>
            <Button
              title="Login"
              enabled={true}
              loading={false}
              onPress={handleSignIn}
            />

            <Separator />

            <Button
              title="Criar conta gratuita"
              onPress={hanldeNewAccount}
              enabled={true}
              color={colors.background_secondary}
              light
            />
          </Buttons>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
