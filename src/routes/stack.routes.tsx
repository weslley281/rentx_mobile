import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingComplete } from '../screens/SchedulingComplete';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { CarDetails } from '../screens/CarDetails';

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen name="Car Detail" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="Scheduling Details" component={SchedulingDetails} />
      <Screen name="Scheduling Complete" component={SchedulingComplete} />
    </Navigator>
  );
}
