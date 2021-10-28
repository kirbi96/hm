import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../styles/Colors';
import {IInfo} from '../types/info';

interface IHomeCard extends IInfo {
  onPress: () => void;
}

export const HomeCard = (props: IHomeCard) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <View style={styles.userContainer}>
        <Image style={styles.avatar} source={{uri: props.actor.avatar_url}} />
        <Text>{props.actor.login}</Text>
      </View>
      <Text style={styles.typeText}>Type: {props.type}</Text>
      <Text>Created: {props.created_at}</Text>
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
    borderRadius: 40 / 2,
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
