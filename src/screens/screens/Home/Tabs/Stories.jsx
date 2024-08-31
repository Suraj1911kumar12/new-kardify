import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {showMessage} from 'react-native-flash-message';
import axiosCall from '../../../../../axios';
import {apis} from '../../../../utils/Apis/api';
import {Color} from '../../../../utils/display/Color';
import MainTemp from '../../../../components/Tempalate/MainTemp';
import HomeHeader from '../../../../components/Headers/HomeHeader';
const {width} = Dimensions.get('screen');

const Stories = () => {
  const [stories, setStories] = useState([]);

  const getStories = useCallback(async () => {
    try {
      const response = await axiosCall.get('/fetch-all-stories-customer');
      if (response.data.code === 200) {
        setStories(response.data.allStories);
      } else {
        showMessage({
          message: 'Error',
          description: response.data.message,
          type: 'danger',
        });
      }
    } catch (error) {
      showMessage({
        message: error.response.data.message || 'Failed to fetch stories',
        type: 'danger',
      });
    }
  }, []);

  useEffect(() => {
    getStories();
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Image
        source={{uri: apis.baseImgUrl + item?.image_url}}
        style={{
          width: '100%',
          height: 85,
          marginVertical: 10,
          borderRadius: 10,
        }}
        resizeMode="cover"
      />
      <View style={{gap: 4}}>
        <Text style={{height: 70, color: Color.white, fontSize: 12}}>
          {item?.description}
        </Text>
        <TouchableOpacity>
          <Text style={styles.readMore}>Read more</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    // <SafeAreaView style={styles.container}>
    <MainTemp>
      <HomeHeader backIcon title={'Stories'} />
      <ScrollView style={{paddingBottom: 10}}>
        {stories.length > 0 ? (
          <FlatList
            data={stories}
            renderItem={renderItem}
            keyExtractor={item =>
              item?.id?.toLocaleString() || item?.toLocaleString()
            }
            numColumns={1} // Display 2 items per row
            contentContainerStyle={{padding: 10, gap: 2, marginBottom: 50}}
          />
        ) : (
          <View style={styles.noStoriesContainer}>
            <Text style={styles.noStoriesText}>No stories available</Text>
          </View>
        )}
      </ScrollView>
    </MainTemp>
  );
};

export default Stories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    flex: 1,
    width: width / 2,
    minWidth: 165, // Adjusted to leave space between cards
    backgroundColor: Color.lightBlack,
    borderRadius: 20,
    margin: 4,
    alignItems: 'center',
    gap: 4,
    minHeight: 216,
  },
  readMore: {
    color: Color.yellow,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  noStoriesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50, // Adjust for spacing
  },
  noStoriesText: {
    color: Color.white,
    fontSize: 18,
    textAlign: 'center',
  },
});
