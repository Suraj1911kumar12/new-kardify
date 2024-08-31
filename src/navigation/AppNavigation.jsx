import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import ScreenNames from '../utils/ScrRoutes/Screens';
import {Color} from '../utils/display/Color';
import DashHome from '../screens/screens/DashHome';
import WishList from '../UiComp/Wishlist/Wishlist';
import PrivacyPolicy from '../screens/screens/StaticScreens/PrivacyPolicy';
import ReturnPolicy from '../screens/screens/StaticScreens/ReturnPolicy';
import FeedbackPage from '../screens/screens/StaticScreens/Feedback';
import PurchaseGiftCard from '../screens/screens/StaticScreens/PurchaseGiftCard';
import CustomerSupportPage from '../screens/screens/StaticScreens/CustomerSupport';
import RefundPolicy from '../screens/screens/StaticScreens/RefundPolicy';
import Rewards from '../screens/screens/StaticScreens/Rewards';
import TermsAndConditions from '../screens/screens/StaticScreens/TermsandConditions';
import AboutUs from '../screens/screens/StaticScreens/AboutUs';
import ShippingPolicy from '../screens/screens/StaticScreens/ShippingPolicy';
import ProductList from '../UiComp/Products/ProductsList';
import Accessories from '../UiComp/Accessories/Accessories';
import ProductDetails from '../UiComp/Products/ProductDetails';
import Login from '../screens/auth/Login';
import SignUp from '../screens/auth/SignUp';

const AppNavigation = () => {
  const auth = false;
  return (
    <Stack.Navigator
      initialRouteName={ScreenNames.DashHome}
      screenOptions={{
        headerShown: false,
        headerTintColor: Color.white,
        headerStyle: {backgroundColor: Color.theme},
      }}>
      <Stack.Screen name={ScreenNames.DashHome} component={DashHome} />
      <Stack.Screen name={ScreenNames.wishlist} component={WishList} />

      <Stack.Screen
        name={ScreenNames.privacypolicy}
        component={PrivacyPolicy}
      />
      <Stack.Screen name={ScreenNames.returnpolicy} component={ReturnPolicy} />
      <Stack.Screen name={ScreenNames.feedback} component={FeedbackPage} />
      <Stack.Screen
        name={ScreenNames.purchaseGiftCard}
        component={PurchaseGiftCard}
      />
      <Stack.Screen
        name={ScreenNames.customerSupport}
        component={CustomerSupportPage}
      />
      <Stack.Screen name={ScreenNames.refundPolicy} component={RefundPolicy} />
      <Stack.Screen name={ScreenNames.reward} component={Rewards} />
      <Stack.Screen
        name={ScreenNames.termsAndConditions}
        component={TermsAndConditions}
      />
      <Stack.Screen name={ScreenNames.aboutus} component={AboutUs} />
      <Stack.Screen name={ScreenNames.productList} component={ProductList} />

      <Stack.Screen
        name={ScreenNames.shippingpolicy}
        component={ShippingPolicy}
      />
      <Stack.Screen
        name={ScreenNames.productdetails}
        component={ProductDetails}
      />
      <Stack.Screen name={ScreenNames.accessories} component={Accessories} />

      <Stack.Screen name={ScreenNames.Login} component={Login} />
      <Stack.Screen name={ScreenNames.SignUp} component={SignUp} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
