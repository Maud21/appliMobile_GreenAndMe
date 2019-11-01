import React, { Component } from 'react';
import {
  SafeAreaView
} from 'react-native';
import { createSwitchNavigator, createAppContainer} from 'react-navigation';

import Splachscreen from './app/Loading/Splachscreen/Splachscreen';
import Main from './app/Main/Main';

const AppContainer = createAppContainer (
  createSwitchNavigator({
      Loading: Splachscreen,
      App : Main // vue principale de l'appli
  }, {
      initialRouteName: 'Loading'// route initiale qui sera au chargement
  })
);

class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <AppContainer/>
      </SafeAreaView>
    );
  }
}

export default App;