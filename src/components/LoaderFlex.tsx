import React from 'react';
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  StyleSheet,
  View,
} from 'react-native';
import {Colors} from '../styles/Colors';

export const Loader = (props: ActivityIndicatorProps) => {
  return <ActivityIndicator size={'large'} color={Colors.primary} {...props} />;
};

export const LoaderFlex = (props: ActivityIndicatorProps) => {
  return (
    <View style={styles.loaderFlexContainer}>
      <ActivityIndicator size={'large'} color={Colors.primary} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  loaderFlexContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
