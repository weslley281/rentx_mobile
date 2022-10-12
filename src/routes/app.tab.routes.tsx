import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';

import HomeSvg from '../assets/home.svg';
import CarSvg from '../assets/car.svg';
import PeopleSvg from '../assets/people.svg';

import { AppStackRoutes } from './app.stack.routes';
// import { Profile } from '../screens/Profile';
import { MyCars } from '../screens/MyCars';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.main,
        tabBarInactiveTintColor: theme.colors.text_detail,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 68,
          backgroundColor: theme.colors.background_primary,
        },
      }}
    >
      <Screen name="Initial" component={AppStackRoutes} />
      <Screen name="MyCars" component={MyCars} />
      {/* <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <PeopleSvg width={24} size={24} fill={color} />
          ),
        }}
      /> */}
    </Navigator>
  );
}
