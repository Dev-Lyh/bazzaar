/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import PoppinsFont from '../../components/PoppinsFont';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Header from '../../components/Header';
import Version from '../../components/Version';

export default function Cards() {

  const colorDinamic = (color) => {
    return {
      color: color,
    };
  };

  return (
    <>
      <Header />
      <View style={styles.infos}>
        <PoppinsFont content="Aceitamos os cartões" fontSize={36} fontFamily="Poppins-Bold" marginBottom={20} color="#181818" />
        <View style={[styles.infosLocal, styles.mgBt40]}>
          <View style={styles.alignCenter}>
            <Fontisto name="visa" color="midnightblue" size={56} style={styles.bgCardVisa} />
            <Text style={[styles.cardName, colorDinamic('midnightblue')]}>Visa</Text>
          </View>
          <View style={styles.alignCenter}>
            <Fontisto name="mastercard" color="crimson" size={56} style={styles.bgCardMasterCard} />
            <Text style={[styles.cardName, colorDinamic('crimson')]}>MasterCard</Text>
          </View>
          <View style={styles.alignCenter}>
            <Fontisto name="american-express" color="deepskyblue" size={56} style={styles.bgCardAmericanEx} />
            <Text style={[styles.cardName, colorDinamic('deepskyblue')]}>American{'\r\n'}Express</Text>
          </View>
        </View>
        <View style={styles.infosLocal}>
          <View style={styles.alignCenter}>
            <Fontisto name="paypal" color="darkslateblue" size={56} style={styles.bgCardPaypal} />
            <Text style={[styles.cardName, colorDinamic('darkslateblue')]}>PayPal</Text>
          </View>
          <View style={styles.alignCenter}>
            <Fontisto name="dinners-club" color="darkcyan" size={56} style={styles.bgCardDinersClub} />
            <Text style={[styles.cardName, colorDinamic('darkcyan')]}>Diners Club</Text>
          </View>
          <View style={styles.alignCenter}>
            <Fontisto name="discover" color="darkorange" size={56} style={styles.bgCardDiscover} />
            <Text style={[styles.cardName, colorDinamic('darkorange')]}>Discover</Text>
          </View>
        </View>
      </View>
      <Version />
    </>
  );
}
const styles = StyleSheet.create({
  infos: {
    backgroundColor: '#ffffff',
    paddingVertical: 60,
    paddingHorizontal: 30,
    flex: 1,
    justifyContent: 'center',
  },
  infosLocal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mgBt40: {
    marginBottom: 40,
  },
  alignCenter: {
    alignItems: 'center',
    height: 100,
  },
  cardName: {
    fontFamily: 'Poppins-BoldRegular',
    fontSize: 20,
    textAlign: 'center',
  },
});
