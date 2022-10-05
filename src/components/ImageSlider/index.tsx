import React, { useRef, useState } from 'react';
import { FlatList, ViewToken } from 'react-native';

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

interface ChangeImagesProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export function ImageSlider({ imagesUrl }: Props) {
  const [imageIndex, setImageIndex] = useState(0);

  const indexChanged = useRef((info: ChangeImagesProps) => {
    const index = info.viewableItems[0].index!;
    setImageIndex(index);
  });

  return (
    <Container>
      <ImageIndexs>
        {imagesUrl.map((item, index) => (
          <ImageIndex key={String(index)} active={index === imageIndex} />
        ))}
      </ImageIndexs>

      <FlatList
        data={imagesUrl}
        keyExtractor={(key) => key}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={indexChanged.current}
        pagingEnabled
        renderItem={({ item }) => (
          <CarImageWrapper>
            <CarImage source={{ uri: item }} resizeMode="contain" />
          </CarImageWrapper>
        )}
      />
    </Container>
  );
}
