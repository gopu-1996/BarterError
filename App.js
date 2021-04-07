import React from 'react';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';


import WelcomeScreen from './screens/login';
import { AppDrawerNavigator } from './components/AppDrawerNavigator'
import { AppTabNavigator } from './components/AppTabNavigator'
import { Component } from 'react';


export default class App extends Component {
  render(){
  return (
    <AppContainer/>
  );
  }
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  Drawer:{screen: AppDrawerNavigator},
  BottomTab: {screen: AppTabNavigator},
})

const AppContainer =  createAppContainer(switchNavigator);