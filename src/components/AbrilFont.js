/* eslint-disable prettier/prettier */
import { Text, View } from 'react-native';
import React, { Component } from 'react';

export default function AbrilFont(props) {
  const colorDinamic = () => {
    return {
      color: props.color,
      fontSize: props.fontSize,
      fontFamily: 'AbrilFatface-Regular',
      width: props.width,
      textAlign: props.textAlign,
      marginBottom: props.type === 'semititle' ? 15 : props.marginBottom,
      marginLeft: props.marginLeft,
    };
  }

  return (
    <View>
      <Text style={colorDinamic()} adjustsFontSizeToFit={false}>{props.content}</Text>
    </View>
  );
}
