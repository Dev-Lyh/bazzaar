/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Header from '../../components/Header';

export default function Detail() {

  const route = useRoute();
  const navigation = useNavigation();

  return (
    <>
      <Header />
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <MaterialIcons name="arrow-back" color="#FFFFFF" size={24} />
          <Text style={styles.textBack}>Voltar</Text>
        </TouchableOpacity>
        <View style={styles.alignCenter}>
          <Image source={route.params.image} />
        </View>
        <Text style={styles.title}>{route.params.title}</Text>
        <Text style={styles.price}>{route.params.price}</Text>
        <Text style={styles.descriptionSize}>Selecione um tamanho:</Text>
        <View style={styles.closePart}>
          <TouchableOpacity style={styles.size}>
            <Text style={styles.sizeText}>P</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.size}>
            <Text style={styles.sizeText}>M</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.size}>
            <Text style={styles.sizeText}>G</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.size}>
            <Text style={styles.sizeText}>GG</Text>
          </TouchableOpacity>
        </View>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 20,
    flex: 1,
  },
  size: {
    backgroundColor: 'white',
    height: 68,
    width: 68,
    borderWidth: 2,
    borderColor: '#686868',
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  closePart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sizeText: {
    fontFamily: 'Poppins-Bold',
    color: '#686868',
    fontSize: 20,
  },
  alignCenter: {
    alignItems: 'center',
  },
  mgT: {
    marginTop: 28,
  },
  title: {
    fontFamily: 'Poppins-Regular',
    color: '#181818',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 24,
  },
  price: {
    fontFamily: 'Poppins-Bold',
    color: '#181818',
    textAlign: 'center',
    fontSize: 30,
  },
  backButton: {
    backgroundColor: '#282828',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 8,
    width: 100,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 30,
  },
  textBack: {
    fontSize: 18,
    color: '#FFFFFF',
    marginLeft: 10,
    textTransform: 'uppercase',
  },
  descriptionSize: {
    marginTop: 30,
    marginBottom: 15,
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: 'rgba(0, 0, 0, 0.6)',
  },
});
