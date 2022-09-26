import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import {
  About,
  Brand,
  CarImages,
  Container,
  Content,
  Description,
  Details,
  Header,
  Name,
  Period,
  Price,
  Rent,
} from './styles';

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

      <Content>
        <Details>
          <Description>
            <Brand>Celta</Brand>
            <Name>Celta 2012 1.0</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 60.00</Price>
          </Rent>
        </Details>

        <About>
          Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica
          e de impressão. Lorem Ipsum tem sido o texto fictício padrão da
          indústria desde os anos 1500, quando um impressor desconhecido pegou
          uma cozinha de tipos e embaralhou-a para fazer um livro de espécimes
          de tipos. Ele sobreviveu não apenas cinco séculos, mas também o salto
          para a composição eletrônica, permanecendo essencialmente inalterado.
          Foi popularizado na década de 1960 com o lançamento de folhas Letraset
          contendo passagens de Lorem Ipsum e, mais recentemente, com software
          de editoração eletrônica como Aldus PageMaker, incluindo versões de
          Lorem Ipsum.
        </About>
      </Content>
    </Container>
  );
}
