import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {showMessage} from 'react-native-flash-message';
import ScreenNames from '../utils/ScrRoutes/Screens';

const ProtectedRoute = ({component: Component, auth, ...rest}) => {
  const navigation = useNavigation();

  useEffect(() => {
    if (!auth) {
      showMessage({
        message: 'You need to be logged in to access the cart.',
        type: 'danger',
      });
      navigation.navigate(ScreenNames.Login);
    }
  }, [auth, navigation]);

  // If authenticated, render the component, otherwise render null
  return auth ? <Component {...rest} /> : null;
};

export default ProtectedRoute;
