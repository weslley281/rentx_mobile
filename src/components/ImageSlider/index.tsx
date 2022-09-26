import React from 'react';

import {
  CarImage,
  CarImageWrapper,
  Container,
  ImageIndex,
  ImageIndexs,
} from './styles';

interface Props {
  imagesUrl: string[];
}

export function ImageSlider({ imagesUrl }: Props) {
  return (
    <Container>
      <ImageIndexs>
        <ImageIndex active={true} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
      </ImageIndexs>

      <CarImageWrapper>
        <CarImage source={{ uri: imagesUrl[0] }} resizeMode="contain" />
      </CarImageWrapper>
    </Container>
  );
}
