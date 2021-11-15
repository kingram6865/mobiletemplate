import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home/Home'
import Welcome from '../screens/Welcome/Welcome'
import Tour from '../screens/Tour/Tour'
import Login from '../screens/Login/Login'
import Privacy from '../screens/Privacy/Privacy'
import About from '../screens/About/About'

const Stack = createNativeStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{title: 'The Manual'}} />
        <Stack.Screen name="Welcome" component={Welcome} options={{title: 'Welcome'}} />
        <Stack.Screen name="Tour" component={Tour} options={{title: 'Tour'}} />
        <Stack.Screen name="Glossary" component={Glossary} options={{title: 'Glossary'}} />
        <Stack.Screen name="Login" component={Login} options={{title: 'Login'}} />
        <Stack.Screen name="Privacy" component={Privacy} options={{title: 'Privacy'}} />
        <Stack.Screen name="About" component={About} options={{title: 'About'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator