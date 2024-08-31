import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';

const MainTemp = ({children}) => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#353A40', '#202326']}
        style={styles.linearGradient}>
        <StatusBar
          backgroundColor="#131417"
          barStyle="light-content"
          hidden={false}
        />
        {children}
      </LinearGradient>
    </SafeAreaView>
  );
};

export default MainTemp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131417',
  },
  linearGradient: {
    flex: 1,
    // paddingHorizontal: 5, // Adds padding on the sides
  },
});
