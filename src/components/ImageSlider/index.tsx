import React from 'react';
import { FlatList } from 'react-native';

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
        {imagesUrl.map((item, index) => (
          <ImageIndex key={String(index)} active={true} />
        ))}
      </ImageIndexs>

      <FlatList
        data={imagesUrl}
        keyExtractor={(key) => key}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <CarImageWrapper>
            <CarImage source={{ uri: item }} resizeMode="contain" />
          </CarImageWrapper>
        )}
      />
    </Container>
  );
}
