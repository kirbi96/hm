import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Navigation from '../base/Navigation';

export const Header = () => {
  const handleNavigateToBack = () => {
    Navigation.pop();
  };

  return (
    <View>
      <TouchableOpacity onPress={handleNavigateToBack}>
        <Text>Go back</Text>
      </TouchableOpacity>
    </View>
  );
};
