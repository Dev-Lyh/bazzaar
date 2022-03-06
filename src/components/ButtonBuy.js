/* eslint-disable prettier/prettier */
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { Component } from 'react';

export default class ButtonBuy extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.button}>
        <Text style={styles.title} adjustsFontSizeToFit={false}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#181818',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    width: 85,
    paddingTop: 10,
    paddingBottom: 8,
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    textTransform: 'uppercase',
  },
});
