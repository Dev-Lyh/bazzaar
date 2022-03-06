/* eslint-disable prettier/prettier */
import { View, Image, StyleSheet } from 'react-native';
import React from 'react';

import PoppinsFont from './PoppinsFont';
import AbrilFont from './AbrilFont';
import Details from './Details';

export default function CardNews(item) {
  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <Image source={item.modal} style={styles.size}/>
        <View style={styles.infos}>
          <PoppinsFont fontFamily="Poppins-Regular" color="#181818" textTransform="uppercase" fontSize={12} letterSpacing={1} content={item.title} marginBottom={5} />
          <AbrilFont color="#181818" fontSize={18} content={item.price} marginBottom={5} />
        </View>
        <View style={styles.flexOne}>
        <Details title={item.title} modal={item.modal} price={item.price} />
      </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  infos: {
    minHeight: 110,
    width: 210,
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  container: {
    marginRight: 20,
  },
  border: {
    borderWidth: 1,
    borderColor: '#f5f5f5',
    elevation: 5,
  },
  size: {
    width: 210,
    height: 260,
  },
  flexOne: {
    flex: 1,
  },
});
