/* eslint-disable prettier/prettier */
import React from 'react';
import { StatusBar, LogBox } from 'react-native';
import Warning from './src/components/Warning';
import Routes from './src/routes';

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={'#3f3844'} barStyle="light-content" />
      <Warning />
      <Routes />
    </>
  );
}
