import React from 'react';
import { StyleSheet } from 'react-native';

import MainStackNavigator from './components/MainStackNavigator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <MainStackNavigator style={ styles.container } />
  );
}
