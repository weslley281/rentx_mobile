import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import { CarImages, Container, Header } from './styles';

export function CarDetails() {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={[
            'https://media.gm.com/content/Pages/news/br/pt/2011/Feb/0202_celta/jcr:content/image.resize.maxw_600.jpg/1301066044243.jpg',
          ]}
        />
      </CarImages>
    </Container>
  );
}
