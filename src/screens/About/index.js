/* eslint-disable prettier/prettier */
import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native';

import React from 'react';
import Header from '../../components/Header';
import BannerEnd from '../../images/banner-end.png';
import Version from '../../components/Version';

import AbrilFont from '../../components/AbrilFont';
import PoppinsFont from '../../components/PoppinsFont';

import LocalIcon from '../../components/icons/LocalIcon';
import ClockIcon from '../../components/icons/ClockIcon';
import Icon from 'react-native-vector-icons/FontAwesome5Pro';


export default function About() {
  return (
    <ScrollView>
      <Header />
      <ImageBackground source={BannerEnd} resizeMode="cover" style={styles.BannerEnd}>
        <AbrilFont content="Bem-vindos ao BAZZAAR" color="#FFFFFF" fontSize={32} marginBottom={25} textAlign="center" />
        <PoppinsFont content="Nossos produtos são inspirados pelas pessoas que estão à nossa volta, com suas belezas e qualidades." marginBottom={15} fontSize={18} color="#FFFFFF" fontFamily="Poppins-Regular" />
        <PoppinsFont content="Produtos de bom gosto especialmente para você." marginBottom={15} fontSize={18} color="#FFFFFF" fontFamily="Poppins-Regular" />
        <PoppinsFont content="Descubra nossa história e aproveite as promoções." marginBottom={15} fontSize={18} color="#FFFFFF" fontFamily="Poppins-Regular" />
      </ImageBackground>
      <View style={styles.infos}>
        <View style={[styles.infosLocal, styles.viewMarginBottom]}>
          <LocalIcon />
          <View>
            <View style={styles.infosTextContainerOne}>
              <PoppinsFont content="Rua Eusébio " textAlign="left" fontSize="infos" color="black"/>
              <PoppinsFont content="10" fontFamily="Poppins-Bold" fontSize="infos" textAlign="left" color="#FDB164" />
            </View>
            <View style={styles.infosTextContainerOne}>
              <PoppinsFont content="Centro" fontFamily="Poppins-Bold" fontSize="infos" textAlign="left" color="#ff901f" />
              <PoppinsFont content=", Cidade das Águas" fontSize="infos" textAlign="left" color="black"/>
            </View>
          </View>
        </View>
        <View style={[styles.infosLocal, styles.viewMarginBottom]}>
          <View>
            <View style={styles.infosTextContainerTwo}>
              <PoppinsFont content="Aberta de segunda à sexta" textAlign="right" color="black" fontSize="infos" />
            </View>
            <View style={styles.infosTextContainerTwo}>
              <PoppinsFont content="das " fontSize="infos" textAlign="right" color="black" />
              <PoppinsFont content="10:00 " fontFamily="Poppins-Bold" fontSize="infos" textAlign="right" color="#00ccb8" />
              <PoppinsFont content="às " fontSize="infos" textAlign="right" color="black" />
              <PoppinsFont content="21:00" fontFamily="Poppins-Bold" fontSize="infos" textAlign="right" color="#368f86" />
            </View>
          </View>
          <ClockIcon />
        </View>
        <PoppinsFont content="Nossas redes" fontSize={28} fontFamily="Poppins-Bold" marginBottom={20} color="black"/>
        <View
        >
          <View style={[styles.infosLocal]}>
            <View style={styles.viewAlignCenter}>
              <Icon name="pinterest-square" size={54} color="crimson" />
              <PoppinsFont content="@bazzaar" fontSize={16} color="black" />
            </View>
            <View style={styles.viewAlignCenter}>
              <Icon name="facebook-square" size={54} color="midnightblue" />
              <PoppinsFont content="@bazzaar" fontSize={16} color="black" />
            </View>
          </View>
          <View style={styles.viewAlignCenter}>
            <Icon name="snapchat-square" size={54} color="orange" />
            <PoppinsFont content="@bazzaar" fontSize={16} color="black" />
          </View>
          <View style={[styles.infosLocal, styles.adjustSimetri]}>
            <View style={styles.viewAlignCenter}>
              <Icon name="twitter-square" size={54} color="dodgerblue" />
              <PoppinsFont content="@bazzaar" fontSize={16} color="black" />
            </View>
            <View style={styles.viewAlignCenter}>
              <Icon name="instagram-square" size={54} color="hotpink" />
              <PoppinsFont content="@bazzaar" fontSize={16} color="black" />
            </View>
          </View>
        </View>
      </View>
      <Version />

    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  BannerEnd: {
    paddingVertical: 90,
    paddingHorizontal: 18,
  },
  infos: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 60,
    paddingHorizontal: 30,
  },
  infosLocal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infosTextContainerOne: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  infosTextContainerTwo: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  viewAlignCenter: {
    alignItems: 'center',
  },
  viewMarginBottom: {
    marginBottom: 60,
  },
});
