import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import { api } from '../../../services/api';

import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { PasswordInput } from '../../../components/PasswordInput';
import { Button } from '../../../components/Button';

import {
  Container,
  Header,
  Bullets,
  Title,
  Subtitle,
  Form,
  FormTitle,
} from './styles';

interface Params {
  user: {
    name: string;
    email: string;
    driverLicense: string;
  };
}

export const StepTwo: React.FC = () => {
  const { colors } = useTheme();
  const { navigate, goBack } = useNavigation<any>();
  const route = useRoute();

  const { user } = route.params as Params;

  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  function handleBack() {
    goBack();
  }

  async function handleSubmit() {
    if (!password || !passwordConfirm) {
      return Alert.alert('Opa', 'Informe sua senha');
    }

    if (password !== passwordConfirm) {
      return Alert.alert('Opa', 'As senhas não são iguais');
    }

    await api
      .post('/users', {
        name: user.name,
        email: user.email,
        password,
        driver_license: user.driverLicense,
      })
      .then(() => {
        navigate('Confirmation', {
          title: 'Conta criada!',
          message: 'Agora é só desfrutar de nossos serviços',
          nextScreenRoute: 'SignIn',
        });
      })
      .catch(() => {
        Alert.alert('Opa!', 'Não foi possível cadastrar');
      });
  }

  return (
    <KeyboardAvoidingView behavior="position">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <BackButton onPress={handleBack} />

            <Bullets>
              <Bullet />
              <Bullet active />
            </Bullets>
          </Header>

          <Title>{'Crie sua\nconta'}</Title>
          <Subtitle>{'Faça seu cadastro de\nforma rápida e fácil'}</Subtitle>

          <Form>
            <FormTitle>{'2. Senha'}</FormTitle>

            <PasswordInput
              value={password}
              iconName="lock"
              placeholder="Senha"
              onChangeText={setPassword}
            />
            <PasswordInput
              value={passwordConfirm}
              iconName="lock"
              placeholder="Repetir senha"
              onChangeText={setPasswordConfirm}
            />
          </Form>

          <Button
            title="Cadastrar"
            color={colors.success}
            onPress={handleSubmit}
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
