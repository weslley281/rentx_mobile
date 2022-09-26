import React from 'react';

import { Container, Title } from './styles';

interface Props {
  title: String;
  color?: String;
}

export function Button({ title, color, ...rest }: Props) {
  return (
    <Container {...rest} color={color}>
      <Title>{title}</Title>
    </Container>
  );
}
