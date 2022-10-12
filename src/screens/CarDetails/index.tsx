import React, { useEffect, useState } from 'react';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { useNavigation, useRoute } from '@react-navigation/native';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import {
  About,
  Accessories,
  Brand,
  CarImages,
  Container,
  Content,
  Description,
  Details,
  Footer,
  Header,
  Name,
  Period,
  Price,
  Rent,
  SliderContent,
} from './styles';
import { Button } from '../../components/Button';
import { CarDTO } from '../../dtos/CarDTO';
import { getAccessoriesIcon } from '../../utils/getAccessoriesIcon';
import { NavigationProps } from '../../dtos/NavigationDTO';
import { ScrollView, StatusBar } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import { api } from '../../services/api';

interface Params extends NavigationProps {
  car: CarDTO;
  goBack: () => void;
}

export function CarDetails() {
  const { navigate, goBack } = useNavigation<any>();
  const { params } = useRoute();
  const netInfo = useNetInfo();
  const scrollY = useSharedValue(0);
  const navigation = useNavigation<Params>();
  const route = useRoute();
  const { car } = params as Params;
  const [carUpdated, setCarUpdated] = useState<CarDTO>({} as CarDTO);

  const headerStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 200],
        [295, 120],
        Extrapolate.CLAMP
      ),
    };
  });

  const sliderStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [0, 150], [1, 0], Extrapolate.CLAMP),
    };
  });

  function handleConfirmRental() {
    navigate('Scheduling', { car });
  }

  function handleBack() {
    goBack();
  }

  useEffect(() => {
    async function fetchCarUpdated() {
      const response = await api.get(`/cars/${car.id}`);
      setCarUpdated(response.data);
    }

    if (netInfo.isConnected === true) {
      fetchCarUpdated();
    }
  }, [netInfo.isConnected]);

  return (
    <Container>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <Animated.View style={[headerStyleAnimation]}>
        <Header>
          <BackButton onPress={handleBack} />
        </Header>

        <Animated.View style={sliderStyleAnimation}>
          <SliderContent>
            {/* <ImageSlider
              imagesUrl={
                !!carUpdated.photos
                  ? carUpdated.photos
                  : [{ id: car.thumbnail, photo: car.thumbnail }]
              }
            /> */}
            <ImageSlider imagesUrl={car.photos} />
          </SliderContent>
        </Animated.View>
      </Animated.View>

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 24, alignItems: 'center' }}
        showsVerticalScrollIndicator={false}
        // onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ {car.price}</Price>
          </Rent>
        </Details>

        <Accessories>
          {car.accessories.map((accessory) => (
            <Accessory
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoriesIcon(accessory.type)}
            />
          ))}
        </Accessories>

        <About>{car.about}</About>
      </ScrollView>

      <Footer>
        <Button
          title="Escolher Periodo do Aluguel"
          onPress={handleConfirmRental}
          enabled={!!netInfo.isConnected}
        />
      </Footer>
    </Container>
  );
}
