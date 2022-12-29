/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home/Home';
import Quiz from '../screens/quiz/Quiz';
import Result from '../screens/results/Results';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
      name="Home" 
      component={Home} 
      options={{headerShown: false}} /> 

      <Stack.Screen 
      name="Quiz" 
      component={Quiz} 
      options={{headerShown: false}} /> 
      
      <Stack.Screen 
      name="Results" 
      component={Result} 
      options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

export default MyStack; 
