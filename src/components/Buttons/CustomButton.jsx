import React from 'react';
import {
  Pressable,
  Text,
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';
import {SCREEN_WIDTH} from '../../utils/display/Size';
import {Bold} from '../../utils/display/Font';
import {Color} from '../../utils/display/Color';

const {height, width} = Dimensions.get('screen');

const CustomButton = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPressButton}>
      <View>
        <Text style={[styles.text, {...props.txtStyle}]}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Color.white,
    fontSize: height / 45,
    textAlign: 'center',
    fontWeight: '500',
  },
  button: {
    width: width / 1.35,
    // flex: 1,
    height: height / 18,
    alignSelf: 'center',
    borderRadius: 25,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#424750',
    backgroundColor: Color.yellow,
  },
});

export default CustomButton;
