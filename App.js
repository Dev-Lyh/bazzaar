/* eslint-disable prettier/prettier */
import React from 'react';
import { StatusBar, LogBox } from 'react-native';
import Home from './src/screens/Home';
import Warning from './src/components/Warning';

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={'#3f3844'} barStyle="light-content" />
      <Warning />

      <Home />
    </>
  );
}
