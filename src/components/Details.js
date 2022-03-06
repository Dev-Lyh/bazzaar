/* eslint-disable prettier/prettier */
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';

export default function Details(props) {

  const [getTitle, setTitle] = useState(props.title);
  const [getPrice, setPrice] = useState(props.price);
  const [getImage, setImage] = useState(props.modal);

  const navigation = useNavigation();

  return (
    <View>
      <Button color={'#3f3844'} title="ver detalhes" onPress={() => navigation.navigate('Details', { title: getTitle, price: getPrice, image: getImage })} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  size: {
    backgroundColor: 'white',
    height: 34,
    width: 34,
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
    fontSize: 16,
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
    fontSize: 16,
  },
  price: {
    fontFamily: 'Poppins-Bold',
    color: '#181818',
    fontSize: 20,
  },
});
