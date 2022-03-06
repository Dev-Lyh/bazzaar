/* eslint-disable prettier/prettier */
import { Text, View } from 'react-native';
import React from 'react';

export default function PoppinsFont(props) {
  const colorDinamic = () => {
    return {
      color: props.color != null ? props.color : 'white',
      fontSize: props.fontSize === 'infos' ? 18 : props.fontSize,
      fontFamily: props.fontFamily != null ? props.fontFamily : 'Poppins-Regular',
      width: props.width,
      marginBottom: props.marginBottom,
      marginLeft: props.marginLeft,
      textTransform: props.textTransform,
      letterSpacing: props.letterSpacing,
      textAlign: props.textAlign == null ? 'center' : props.textAlign,
      fontWeight: props.fontWeight,
    };
  };
  return (
    <View>
      <Text style={[colorDinamic(), props.styles]} adjustsFontSizeToFit={false}>{props.content}</Text>
    </View>
  );
}
