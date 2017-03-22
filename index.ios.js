import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Loading from './Screens/Loading';
import Home from './Screens/Home';

class ArcheryScorecardApp extends Component {
  render() {
    return (
        <Loading/>
    );
  }
}

const ModalStack = StackNavigator({
  Loading: { screen: ArcheryScorecardApp },
  Home: { screen: Home },
});

export default ArcheryScorecardApp;

AppRegistry.registerComponent('ArcheryScorecardApp', () => ArcheryScorecardApp);
