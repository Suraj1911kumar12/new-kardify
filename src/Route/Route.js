// import { View, Text } from 'react-native'
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from '../navigation/AppNavigation';
import FlashMessage from 'react-native-flash-message';
import {AuthProvider} from '../context/AuthContext';

const Route = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <AppNavigation />
        <FlashMessage position="bottom" />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default Route;
