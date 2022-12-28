/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MyStack from './navigation/index';

const App = () => {

  return ( 
    <NavigationContainer> 
      <SafeAreaProvider> 
        <MyStack />
      </SafeAreaProvider>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  container: { 
    paddingTop: 40, 
    paddingHorizontal: 16, 
  },
});

export default App;
