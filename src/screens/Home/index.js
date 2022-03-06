/* eslint-disable prettier/prettier */
import React from 'react';
import { Dimensions, ImageBackground, ScrollView, StyleSheet, View, FlatList } from 'react-native';

// COMPONENTS
import Header from '../../components/Header';
import ButtonBuy from '../../components/ButtonBuy';
import Footer from '../../components/Footer';
import Version from '../../components/Version';

// CARDS
import CardNews from '../../components/CardNews';

// FONTS
import AbrilFont from '../../components/AbrilFont';
import PoppinsFont from '../../components/PoppinsFont';

// MINIATURE IMAGES
import Bannert from '../../images/banner.png';
import Kimono from '../../images/kimono.png';
import AnimalPrint from '../../images/camisa-onca.png';
import WhiteTshirt from '../../images/camisa-cropped-branca.png';

export default function Home() {

  const novidades = [
    { id: 1, title: 'KIMONO FEMININO AMPLO FLORAL PRETO', modal: `${Kimono}`, price: 'R$ 139,90' },
    { id: 2, title: 'CAMISA FEMININA MANGA 7/8 ANIMAL PRINT ONÇA', modal: `${AnimalPrint}`, price: 'R$ 99,90' },
    { id: 3, title: 'CAMISA FEMININA MANGA CURTA BATMAN BRANCO', modal: `${WhiteTshirt}`, price: 'R$ 99,90' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Header />
      <ImageBackground source={Bannert} resizeMode="cover" style={styles.image}>
        <AbrilFont color="#FFFFFF" fontSize={28} content="Vestidos com 50% de desconto" width={230} marginBottom={20} />
        <ButtonBuy title="Comprar" />
      </ImageBackground>
      <View style={styles.textNews}>
        <PoppinsFont color="#181818" fontSize={24} content="Novidades" marginBottom={10} fontFamily="Poppins-Bold" textTransform="uppercase" style={styles.textNews} />
      </View>

      <FlatList
        data={novidades}
        renderItem={({ item }) => CardNews(item)}
        key={(item) => item.id}
        horizontal={true}
        style={styles.firstFlat}
      />
      <Footer />
      <Version/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
  },
  image: {
    justifyContent: 'center',
    paddingLeft: 20,
    paddingVertical: 48,
    marginBottom: 20,
  },
  textNews: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
  },
  fashionView: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    marginBottom: 60,
  },
  scrollpadding: {
    paddingLeft: 20,
    marginBottom: 30,
  },
  hiddenSpace: {
    width: 20,
  },
  adjustSimetri: {
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  firstFlat: {
    marginHorizontal: 20,
    marginBottom: 40,
  },
});
