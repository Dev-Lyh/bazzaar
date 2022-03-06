/* eslint-disable prettier/prettier */
import { Text, View, StyleSheet } from 'react-native';
import React from 'react';

export default function Version() {
  return (
    <View style={styles.versionBox}>
      <Text style={styles.versionText}>versão 1.1.0</Text>
    </View>
  );
}
const styles = StyleSheet.create({
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
