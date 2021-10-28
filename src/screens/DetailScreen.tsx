import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Header} from '../components/Header';
import {RouteProp, useRoute} from '@react-navigation/core';
import {RootStackParamList} from '../navigation/Navigator';

export const DetailScreen = () => {
  const {info} = useRoute<RouteProp<RootStackParamList, 'DETAIL_IN'>>().params;

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.infoContainer}>
        <View>
          <Text>ID: {info?.id}</Text>
          <Text>type: {info?.type}</Text>
          <Text>created: {info?.created_at}</Text>
        </View>

        <View style={styles.userContainer}>
          <Image
            style={styles.avatar}
            source={{uri: info?.actor?.avatar_url}}
          />

          <Text style={styles.loginText}>{info?.actor?.login}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  infoContainer: {
    marginTop: 16,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
  },
  loginText: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: '700',
  },
});
