/* eslint-disable prettier/prettier */
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Modal from 'react-native-modal';

export default function Details(props) {

  const [getModal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!getModal);
  };

  return (
    <View>
      <Button color={'#3f3844'} title="ver detalhes" onPress={handleModal} />
      <Modal isVisible={getModal} animationInTiming={1000} animationOutTiming={1500}>
        <View style={styles.container}>
          <View style={styles.closePart}>
            <Image source={props.modal} resizeMode="contain"/>
            <View style={styles.alignCenter}>
              <Button color="#181818" title="fechar" onPress={handleModal} />
              <TouchableOpacity style={[styles.size, styles.mgT]}>
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
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.price}>{props.price}</Text>
        </View>
      </Modal>
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
