import React from 'react';
import Navigator from './src/navigation/Navigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {store} from './src/store';
import {Provider} from 'react-redux';
import {SafeAreaView} from 'react-native';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <Provider store={store}>
          <Navigator />
        </Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
