/* eslint-disable prettier/prettier */
import { View, Image, StyleSheet } from 'react-native';
import React from 'react';

import PoppinsFont from './PoppinsFont';
import Details from './Details';

export default function CardBasic(item) {
  return (
    <View>
      <View style={styles.border}>
        <Image source={item.modal} style={{ width: 172, height: 213 }} />
        <View style={styles.infos}>
          <PoppinsFont fontFamily="Poppins-Regular" color="#181818" textTransform="uppercase" fontSize={12} letterSpacing={1} content={item.title} marginBottom={5} />
          <PoppinsFont fontFamily="Poppins-Bold" color="#181818" fontSize={18} content={item.price} marginBottom={5} />
        </View>
      <View style={{ flex: 1 }}>
        <Details title={item.title} modal={item.modal} price={item.price} />
      </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  infos: {
    minHeight: 100,
    width: 172,
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 0.5,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  border: {
    borderWidth: 1,
    borderColor: '#f5f5f5',
    elevation: 5,
    marginRight: 20,
  },
});
