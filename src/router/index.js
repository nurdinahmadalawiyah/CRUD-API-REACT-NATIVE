import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home'
import CallAPIVanilla from '../pages/CallAPIVanilla'
import CallAPIAxios from '../pages/CallAPIAxios'
import LocalAPI from '../pages/LocalAPI';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LocalAPI" component={LocalAPI} options={{ headerShown: false }} />
      <Stack.Screen name="CallAPIAxios" component={CallAPIAxios} options={{ headerShown: false }} />
      <Stack.Screen name="CallAPIVanilla" component={CallAPIVanilla} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default Router