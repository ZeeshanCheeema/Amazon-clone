import {StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import Routes from './android/app/src/Navigation/Routes';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={'#9ee4d4'} barStyle={'dark-content'} />
      <Routes />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
