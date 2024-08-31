import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MiIcon from 'react-native-vector-icons/MaterialIcons';

import {Color} from '../../utils/display/Color';
import {useNavigation} from '@react-navigation/native';
import ScreenNames from '../../utils/ScrRoutes/Screens';

const HomeHeader = ({title, backIcon, profileTitle}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{flex: 1, paddingHorizontal: 5}}>
        {backIcon && (
          <View style={styles.firstView}>
            <Pressable onPress={() => navigation.goBack()}>
              <MiIcon
                name="keyboard-arrow-left"
                style={{fontSize: 30, color: Color.white}}
              />
            </Pressable>
          </View>
        )}
        {profileTitle && !backIcon && (
          <View>
            <Text style={{fontSize: 18, color: Color.white}}>Welcome</Text>
          </View>
        )}
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={{fontSize: 20, color: Color.white, fontWeight: '600'}}>
          {title}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
          flexDirection: 'row',
          gap: 4,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate(ScreenNames.wishlist)}
          style={styles.iconCont}>
          <AntDesign name="heart" size={14} color={Color.iconGrey} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconCont}>
          <MaterialCommunityIcons
            name="bell-ring"
            size={20}
            color={Color.iconGrey}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#f2f2f2',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconCont: {
    width: 36,
    height: 36,
    backgroundColor: Color.lightBlack,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});
