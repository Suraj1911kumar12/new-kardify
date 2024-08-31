import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  useWindowDimensions,
} from 'react-native';
import RenderHtml from 'react-native-render-html';
import axiosCall from '../../../../axios';
import {Color} from '../../../utils/display/Color';

const PurchaseGiftCard = () => {
  const {width} = useWindowDimensions();
  const [loading, setLoading] = useState(true);
  const [privacyPolicy, setPrivacyPolicy] = useState('');

  useEffect(() => {
    // const fetchPrivacyPolicy = async () => {
    //   try {
    //     const response = await axios.get('/fetch-static-data');
    //     setPrivacyPolicy(response.data.data.term_condition); // Assuming the API returns an object with a 'policy' field containing HTML content
    //     setLoading(false);
    //   } catch (error) {
    //     console.error('Failed to fetch privacy policy:', error);
    //     setLoading(false);
    //   }
    // };
    // fetchPrivacyPolicy();
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Terms And conditions</Text>
      {/* <RenderHtml
        contentWidth={width}
        source={{html: privacyPolicy}}
        tagsStyles={styles.htmlContent}
      /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Color.lightBlack,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.lightBlack,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: Color.white,
    textAlign: 'center',
  },
  htmlContent: {
    p: {
      fontSize: 16,
      lineHeight: 24,
      marginBottom: 10,
      color: Color.white,
    },
    a: {
      color: '#fff', // Customize the link color
      textDecorationLine: 'underline',
    },
    // Add styles for other HTML elements if needed
  },
});

export default PurchaseGiftCard;
