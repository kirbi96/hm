import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../styles/Colors';
import {IInfo} from '../types/info';

interface IHomeCard extends IInfo {
  onPress: () => void;
}

export const HomeCard = ({actor, created_at, type, onPress}: IHomeCard) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.userContainer}>
        <Image style={styles.avatar} source={{uri: actor.avatar_url}} />
        <Text>{actor.login}</Text>
      </View>
      <Text style={styles.typeText}>Type: {type}</Text>
      <Text>Created: {created_at}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.black,
    padding: 15,
    marginTop: 16,
    borderRadius: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  typeText: {
    marginTop: 16,
  },
});
