/* eslint-disable prettier/prettier */
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title} adjustsFontSizeToFit={false}>BAZZAAR</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: Dimensions.get('window').width,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    borderBottomColor: '#00000020',
    borderBottomWidth: 1,
  },
  title: {
    fontFamily: 'AbrilFatface-Regular',
    color: '#000000',
    fontSize: 24,
  },
});
