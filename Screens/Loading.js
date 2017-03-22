import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Loading extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Archery
        </Text>
        <Text style={styles.welcome}>
          Scorecard
        </Text>
        <Button title='Start' onPress={() => navigate('Home')}/>
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

export default Loading;
