import React, { Component } from 'react';
import { StackNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import {
  StyleSheet,
  Image
  
} from 'react-native';

//Components Imports
import Home from './home/Home';
import Plants from './plants/Plants';
import Search from './search/Search';
import MesProjets from './home/MesProjets';



const MainTabNavigator = createAppContainer(
    createBottomTabNavigator ({
      Home: Home,
      MesProjets: MesProjets,
      Plants : Plants,
      Search: Search,
    }, {
      initialRouteName: 'Home'
  
    })
  );

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }  
    }
    render() {
        return (
           <MainTabNavigator style={{flex: 1}}/>
        );
    }
}

const styles = StyleSheet.create ({
  image_home: {
    height: 50,
    width: 50
  }
})


export default Main;

/*navigationOptions: {
        tabBarImage: () => {
          return <Image source={require('../../assets/images/home.jpeg')}
          style={styles.image_home}/>
        }
      },*/