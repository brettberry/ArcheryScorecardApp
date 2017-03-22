import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
            This is the home page!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3B3F40',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Quicksand',
    color: '#E2F1F5',
  },
});

export default Home;
