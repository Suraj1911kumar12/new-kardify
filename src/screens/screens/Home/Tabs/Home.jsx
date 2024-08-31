import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainTemp from '../../../../components/Tempalate/MainTemp';
import HomeHeader from '../../../../components/Headers/HomeHeader';
import SearchBar from '../../../../components/SearchBar/SearchBar';
import Catalogue from '../../../../UiComp/Catelogue/Catelogue';
import TopSellingProduct from '../../../../UiComp/TopSellingComp/TopSellingComp';
import Icon from 'react-native-vector-icons/FontAwesome5';

import StoriesHome from '../../../../UiComp/Stories/Stories';
import Offers from '../../../../UiComp/Offers/Offers';
import Brands from '../../../../UiComp/Brands/Brands';
import Testimonials from '../../../../UiComp/Testimonials/Testimonials';

const Home = () => {
  return (
    <MainTemp>
      <HomeHeader profileTitle />
      <ScrollView style={{paddingTop: 10}} showsVerticalScrollIndicator={false}>
        <SearchBar />
        <Catalogue />
        <TopSellingProduct />
        {/* ***********************************HR Line*********************************** */}
        <View style={{height: 1, width: '100%', backgroundColor: 'black'}} />
        <View style={styles.yellowBox}>
          <Icon name="headset" style={{fontSize: 25}} />
        </View>

        <Text
          style={{
            fontSize: 48,
            color: '#fff',
            fontFamily: 'Playball',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Stories
        </Text>
        <Text
          style={{
            color: '#E5BC56',
            fontFamily: 'Playball',
            fontSize: 20,
            alignSelf: 'center',
            marginBottom: 15,
          }}>
          Driving Social Network
        </Text>

        <View style={{marginBottom: 20}}>
          <StoriesHome />
        </View>
        <View>
          <Image
            source={require('../../../../assets/offer2.png')}
            style={{width: '100%', height: 75, marginVertical: 10}}
            resizeMode="contain"
          />
          <Offers />
        </View>
        <Brands />
        <View style={[styles.BrandMainView, {marginBottom: 0}]}>
          <View style={{width: '100%'}}>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                lineHeight: 24,
                fontWeight: '500',
                marginVertical: 15,
                textAlign: 'center',
              }}>
              Testimonials
            </Text>
          </View>
          <Testimonials />
        </View>
        <View style={{height: 100}} />
      </ScrollView>
    </MainTemp>
  );
};

export default Home;

const styles = StyleSheet.create({
  yellowBox: {
    height: 63,
    width: 63,
    backgroundColor: '#DFB852',
    borderRadius: 35,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    borderWidth: 2.5,
    borderColor: 'black',
  },
});
