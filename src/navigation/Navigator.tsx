import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Navigation from '../base/Navigation';
import {Colors} from '../styles/Colors';
import {TabsStack} from './tabs/TabsStack';
import {IInfo} from '../types/info';

export type RootStackParamList = {
  DETAIL_IN: {info: IInfo};
};

const Stack = createStackNavigator<RootStackParamList>();

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.white,
  },
};

const Navigator = () => {
  return (
    <NavigationContainer theme={AppTheme} ref={Navigation.navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {TabsStack}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
