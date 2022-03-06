/* eslint-disable prettier/prettier */
import React from 'react';
import { Dimensions, ImageBackground, ScrollView, StyleSheet, View, FlatList, Text } from 'react-native';

// COMPONENTS
import Header from '../../components/Header';
import ButtonBuy from '../../components/ButtonBuy';

// CARDS
import CardNews from '../../components/CardNews';
import CardBasic from '../../components/CardBasic';

// FONTS
import AbrilFont from '../../components/AbrilFont';
import PoppinsFont from '../../components/PoppinsFont';

// MINIATURE IMAGES
import Bannert from '../../images/banner.png';
import BannerEnd from '../../images/banner-end.png';
import Kimono from '../../images/kimono.png';
import AnimalPrint from '../../images/camisa-onca.png';
import WhiteTshirt from '../../images/camisa-cropped-branca.png';

// MODAL IMAGES
import GolaAltaModal from '../../images/imagesModal/golaAlta.png';
import JaquetaModal from '../../images/imagesModal/Jaqueta.png';
import OverSizedModal from '../../images/imagesModal/oversized.png';
import PlusSizeModal from '../../images/imagesModal/plusSize.png';

// ICONS
import LocalIcon from '../../components/icons/LocalIcon';
import ClockIcon from '../../components/icons/ClockIcon';
import Icon from 'react-native-vector-icons/FontAwesome5Pro';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Home() {

  const novidades = [
    { id: 1, title: 'KIMONO FEMININO AMPLO FLORAL PRETO', modal: `${Kimono}`, price: 'R$ 139,90' },
    { id: 2, title: 'CAMISA FEMININA MANGA 7/8 ANIMAL PRINT ONÇA', modal: `${AnimalPrint}`, price: 'R$ 99,90' },
    { id: 3, title: 'CAMISA FEMININA MANGA CURTA BATMAN BRANCO', modal: `${WhiteTshirt}`, price: 'R$ 99,90' },
  ];

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
              <PoppinsFont content="Rua Eusébio " textAlign="left" fontSize="infos" />
              <PoppinsFont content="10" fontFamily="Poppins-Bold" fontSize="infos" textAlign="left" color="#FDB164" />
            </View>
            <View style={styles.infosTextContainerOne}>
              <PoppinsFont content="Centro" fontFamily="Poppins-Bold" fontSize="infos" textAlign="left" color="#ff901f" />
              <PoppinsFont content=", Cidade das Águas" fontSize="infos" textAlign="left" />
            </View>
          </View>
        </View>
        <View style={[styles.infosLocal, styles.viewMarginBottom]}>
          <View>
            <View style={styles.infosTextContainerTwo}>
              <PoppinsFont content="Aberta de segunda à sexta" textAlign="right" fontSize="infos" />
            </View>
            <View style={styles.infosTextContainerTwo}>
              <PoppinsFont content="das " fontSize="infos" textAlign="right" />
              <PoppinsFont content="10:00 " fontFamily="Poppins-Bold" fontSize="infos" textAlign="right" color="#00ccb8" />
              <PoppinsFont content="às " fontSize="infos" textAlign="right" />
              <PoppinsFont content="21:00" fontFamily="Poppins-Bold" fontSize="infos" textAlign="right" color="#adfff7" />
            </View>
          </View>
          <ClockIcon />
        </View>
        <PoppinsFont content="Nossas redes" fontSize={28} fontFamily="Poppins-Bold" marginBottom={20} />
        <View style={styles.viewMarginBottom}>
          <View style={[styles.infosLocal, styles.mgBt30]}>
            <View style={styles.viewAlignCenter}>
              <Icon name="pinterest-square" size={54} color="crimson" />
              <PoppinsFont content="@bazzaar" fontSize={16} />
            </View>
            <View style={styles.viewAlignCenter}>
              <Icon name="snapchat-square" size={54} color="orange" />
              <PoppinsFont content="@bazzaar" fontSize={16} />
            </View>
            <View style={styles.viewAlignCenter}>
              <Icon name="facebook-square" size={54} color="white" />
              <PoppinsFont content="@bazzaar" fontSize={16} />
            </View>
          </View>
          <View style={[styles.infosLocal, styles.adjustSimetri]}>
            <View style={styles.viewAlignCenter}>
              <Icon name="twitter-square" size={54} color="dodgerblue" />
              <PoppinsFont content="@bazzaar" fontSize={16} />
            </View>
            <View style={styles.viewAlignCenter}>
              <Icon name="instagram-square" size={54} color="hotpink" />
              <PoppinsFont content="@bazzaar" fontSize={16} />
            </View>
          </View>
        </View>
        <PoppinsFont content="Aceitamos" fontSize={28} fontFamily="Poppins-Bold" marginBottom={20} />
        <View style={[styles.infosLocal, styles.mgBt40]}>
          <Fontisto name="visa" color="white" size={36} style={styles.bgCardVisa} />
          <Fontisto name="mastercard" color="white" size={36} style={styles.bgCardMasterCard} />
          <Fontisto name="american-express" color="white" size={36} style={styles.bgCardAmericanEx} />
        </View>
        <View style={styles.infosLocal}>
          <Fontisto name="paypal" color="white" size={36} style={styles.bgCardPaypal} />
          <Fontisto name="dinners-club" color="white" size={36} style={styles.bgCardDinersClub} />
          <Fontisto name="discover" color="white" size={36} style={styles.bgCardDiscover} />
        </View>
      </View>
      <View style={styles.footer}>
        <PoppinsFont content="Desenvolvido com  " color="#f5f5f5" fontSize={16} />
        <AntDesign name="hearto" color="#9D2CFD" size={18} />
        <PoppinsFont content="  e  " color="#f5f5f5" fontSize={16} />
        <MaterialCommunityIcons name="coffee-outline" color="#005DCB" size={22} />
        <PoppinsFont content="  por " color="#f5f5f5" fontSize={16} />
        <PoppinsFont content="@EmilyFelicio" fontFamily="Poppins-Bold" color="#6072DD" fontSize={16} />
      </View>
      <View style={styles.versionBox}>
        <Text style={styles.versionText}>versão 1.0.0</Text>
      </View>
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
  BannerEnd: {
    paddingVertical: 90,
    paddingHorizontal: 18,
  },
  infos: {
    backgroundColor: '#181818',
    paddingVertical: 60,
    paddingHorizontal: 30,
  },
  infosTextContainerOne: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  infosTextContainerTwo: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  infosLocal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewMarginBottom: {
    marginBottom: 60,
  },
  viewAlignCenter: {
    alignItems: 'center',
  },
  adjustSimetri: {
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  bgCardMasterCard: {
    backgroundColor: 'crimson',
    borderRadius: 4,
  },
  bgCardVisa: {
    backgroundColor: 'midnightblue',
    borderRadius: 4,
  },
  bgCardAmericanEx: {
    backgroundColor: 'deepskyblue',
    borderRadius: 4,
  },
  bgCardPaypal: {
    backgroundColor: 'darkslateblue',
    borderRadius: 4,
  },
  bgCardDinersClub: {
    backgroundColor: 'darkcyan',
    borderRadius: 4,
  },
  bgCardDiscover: {
    backgroundColor: 'darkorange',
    borderRadius: 4,
  },
  mgBt40: {
    marginBottom: 40,
  },
  mgBt30: {
    marginBottom: 30,
  },
  footer: {
    backgroundColor: '#181818',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.2)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
  },
  firstFlat: {
    marginHorizontal: 20,
    marginBottom: 40,
  },
  secondFlat: {
    marginHorizontal: 20,
    marginBottom: 60,
  },
  versionBox: {
    alignItems: 'center',
    backgroundColor: '#101010',
    paddingVertical: 4,
  },
  versionText: {
    color: '#ccc',
    fontSize: 14,
    fontFamily: 'monospace',
  },
});
