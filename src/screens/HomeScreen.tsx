import React, {useCallback, useState} from 'react';
import {Button, FlatList, StyleSheet, View} from 'react-native';
import {useActions, useTypedSelector} from '../base/hooks';
import Navigation from '../base/Navigation';
import {HomeCard} from '../components/HomeCard';
import {screens} from '../navigation/screens';
import {IInfo} from '../types/info';
import {useFocusEffect} from '@react-navigation/core';

export const HomeScreen = () => {
  const [hasReload, setHasReload] = useState<boolean>(false);

  const {info} = useTypedSelector(state => state.info);
  const {fetchInfo} = useActions();

  const handleNavigateToDetailScreen = (info: IInfo) => {
    Navigation.navigate(screens.DETAIL, {info});
  };

  const getInfo = () => {
    fetchInfo();
    setHasReload(false);

    const btnInterval = setTimeout(() => {
      setHasReload(true);
    }, 15000);
    return () => clearInterval(btnInterval);
  };

  useFocusEffect(
    useCallback(() => {
      getInfo();
      const interval = setInterval(() => {
        getInfo();
      }, 60000);
      return () => clearInterval(interval);
    }, []),
  );

  const renderItem = useCallback(
    ({item}: {item: IInfo}) => {
      return (
        <HomeCard
          id={item.id}
          actor={item.actor}
          created_at={item.created_at}
          payload={item.payload}
          public={item.public}
          repo={item.repo}
          type={item.type}
          onPress={() => handleNavigateToDetailScreen(item)}
        />
      );
    },
    [info],
  );

  return (
    <View style={styles.container}>
      <Button disabled={!hasReload} onPress={getInfo} title={'Reload'} />

      <FlatList
        initialNumToRender={5}
        showsVerticalScrollIndicator={false}
        data={info}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});
