import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../../screens/HomeScreen';
import {screens} from '../screens';
import {DetailScreen} from '../../screens/DetailScreen';

const Stack = createStackNavigator();

export const TabsStack = (
  <>
    <Stack.Screen name={screens.HOME} component={HomeScreen} />
    <Stack.Screen name={screens.DETAIL} component={DetailScreen} />
  </>
);
