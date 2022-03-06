/* eslint-disable prettier/prettier */
import { ScrollView, StyleSheet, View, FlatList } from 'react-native';
import React from 'react';
import Header from '../../components/Header';

import GolaAltaModal from '../../images/imagesModal/golaAlta.png';
import JaquetaModal from '../../images/imagesModal/Jaqueta.png';
import OverSizedModal from '../../images/imagesModal/oversized.png';
import PlusSizeModal from '../../images/imagesModal/plusSize.png';

import CardBasic from '../../components/CardBasic';

// FONTS
import AbrilFont from '../../components/AbrilFont';
import PoppinsFont from '../../components/PoppinsFont';

import Version from '../../components/Version';

export default function Category() {
  const modaFem = [
    { id: 4, title: 'BLUSA FEMININA GOLA ALTA MALHA CANELADA PRETO', modal: `${GolaAltaModal}`, price: 'R$ 59,90' },
    { id: 5, title: 'JAQUETA JEANS ALONGADA MANGA LONGA PRETO', modal: `${JaquetaModal}`, price: 'R$ 149,90' },
  ];

  const modaMasc = [
    { id: 6, title: 'CAMISETA PLUS SIZE MANGA CURTA CINZA', modal: `${PlusSizeModal}`, price: 'R$ 59,90' },
    { id: 7, title: 'CAMISA MANGA LONGA OVERSIZED PRETO', modal: `${OverSizedModal}`, price: 'R$ 139,90' },
  ];
  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.pd20}>
        <PoppinsFont content="Categorias" color="#181818" fontSize={26} fontFamily="Poppins-Bold" textTransform="uppercase" textAlign="left"/>
        <PoppinsFont content="Veja alguns de nossos produtos" color="#999999" fontSize={18} fontFamily="Poppins-Regular" textAlign="left" letterSpacing={1}/>
      </View>
      <AbrilFont content="Moda Feminina" color="#FDB164" fontSize={28} marginLeft={20} type="semititle" />
      <FlatList
        data={modaFem}
        renderItem={({ item }) => CardBasic(item)}
        key={(item) => item.id}
        horizontal={true}
        style={styles.secondFlat}
      />

      <AbrilFont content="Moda Masculina" color="#50706D" fontSize={28} marginLeft={20} type="semititle" />
      <FlatList
        data={modaMasc}
        renderItem={({ item }) => CardBasic(item)}
        key={(item) => item.id}
        horizontal={true}
        style={styles.secondFlat}
      />
      <Version />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  secondFlat: {
    marginHorizontal: 20,
    marginBottom: 60,
  },
  pd20: {
    paddingHorizontal: 20,
    marginVertical: 40,
  },
});
