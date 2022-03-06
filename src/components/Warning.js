/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Warning() {
  const [getVisible, setVisible] = useState(true);

  const handleModal = () => {
    setVisible(!getVisible);
  };

  return (
    <Modal isVisible={getVisible} animationInTiming={2000} animationOutTiming={2000}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon name="warning" color="#fe9a13" size={64} />
        </View>
        <Text style={styles.title}>Aviso!</Text>
        <Text style={styles.description}>
          Caso tenha problemas na exibição dos textos, talvez o uso do `react-native link` seja necessário para a visualização dos textos.
        </Text>
        <Text style={styles.monospace}>
          Depois de rodar o comando, verifique o caminho: android {'>'} src {'>'} main {'>'} assets {'>'} fonts.
        </Text>
        <TouchableOpacity style={styles.buttonClose} onPress={ handleModal }>
          <Text style={styles.textButton}>Fechar aviso</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    paddingBottom: 30,
    borderRadius: 10,
  },
  title: {
    color: '#585858',
    fontSize: 36,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    color: '#787878',
    lineHeight: 26,
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 30,
  },
  buttonClose: {
    backgroundColor: '#fe9a13',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
    elevation: 2,
  },
  textButton: {
    fontSize: 18,
    color: '#ffff',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  monospace: {
    fontFamily: 'monospace',
    color: '#adadad',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  header: {
    backgroundColor: '#fee5c7',
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center',
    paddingVertical: 20,
  },
});
