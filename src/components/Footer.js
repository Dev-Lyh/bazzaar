/* eslint-disable prettier/prettier */
import { View, StyleSheet } from 'react-native';
import React, { Component } from 'react';


import AntDesign from 'react-native-vector-icons/AntDesign';
import PoppinsFont from '../components/PoppinsFont';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Footer extends Component {
  render() {
    return (
      <>
        <View style={styles.footer}>
          <PoppinsFont content="Desenvolvido com  " color="#181818" fontSize={16} />
          <AntDesign name="hearto" color="#9D2CFD" size={18} />
          <PoppinsFont content="  e  " color="#181818" fontSize={16} />
          <MaterialCommunityIcons name="coffee-outline" color="#005DCB" size={22} />
          <PoppinsFont content="  por " color="#181818" fontSize={16} />
          <PoppinsFont content="@EmilyFelicio" fontFamily="Poppins-Bold" color="#6072DD" fontSize={16} />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#f5f5f5',
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.2)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
  },
  versionBox: {
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 4,
  },
  versionText: {
    color: '#181818',
    fontSize: 14,
    fontFamily: 'monospace',
  },
});
