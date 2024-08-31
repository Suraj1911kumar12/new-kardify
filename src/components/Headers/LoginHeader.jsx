import React from 'react';
import {View, StyleSheet, Dimensions, Image, Text} from 'react-native';
import {Color} from '../../utils/display/Color';
import {SCREEN_WIDTH} from '../../utils/display/Size';

const {height, width} = Dimensions.get('window');

const LoginHeader = ({text}) => {
  return (
    <View style={styles.header}>
      <View style={styles.img}></View>
      <View style={styles.cmnlogo}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/kardifylogo.png')}
            resizeMode="contain"
            style={styles.logo}
            accessibilityLabel="App Logo"
          />
        </View>
      </View>
      <View style={styles.signin}>
        <Text style={styles.signinText}>{text}</Text>
      </View>
    </View>
  );
};

export default LoginHeader;

const styles = StyleSheet.create({
  header: {
    height: height / 5,

    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: height / 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cmnlogo: {
    height: height / 10,
    width: width / 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoContainer: {
    backgroundColor: Color.black,
    padding: 15,
    maxHeight: 80,
    maxWidth: 80,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  logo: {
    height: height / 22,
    width: width / 6,
  },
  signin: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  signinText: {
    fontSize: 26,
    color: Color.white, // Replaced hardcoded color with constant
    fontWeight: '500',
    lineHeight: 39,
  },
});
