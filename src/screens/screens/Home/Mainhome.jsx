import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Tabs/Home';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Stories from './Tabs/Stories';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Carts from './Tabs/Carts';
import Profile from './Tabs/Profile';
import ProtectedRoute from '../../../Route/ProtectedRoute';
import ScreenNames from '../../../utils/ScrRoutes/Screens';

const TabStack = createBottomTabNavigator();

const TabStackNavigator = () => {
  const auth = true; // Replace this with your actual authentication logic

  return (
    <TabStack.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#989898',
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 3,
        },
        tabBarStyle: {
          backgroundColor: '#000000',
          width: '100%',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          position: 'absolute',
          bottom: 0,
          borderTopWidth: 0,
          justifyContent: 'center',
          alignItems: 'center',
        },
      })}>
      <TabStack.Screen
        name={ScreenNames.Home}
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({focused, color, size}) => (
            <AntDesign
              name="home"
              style={{
                fontSize: size,
                color: focused ? '#ffffff' : '#989898',
              }}
            />
          ),
        }}
      />
      <TabStack.Screen
        name={ScreenNames.stories}
        component={Stories}
        options={{
          title: 'Stories',
          tabBarIcon: ({focused, color, size}) => (
            <MaterialIcons
              name="add-circle-outline"
              style={{
                fontSize: size,
                color: focused ? '#ffffff' : '#989898',
              }}
            />
          ),
        }}
      />
      <TabStack.Screen
        name={ScreenNames.carts}
        options={{
          title: 'Cart',
          tabBarIcon: ({focused, color, size}) => (
            <AntDesign
              name="shoppingcart"
              style={{fontSize: size, color: focused ? '#ffffff' : '#989898'}}
            />
          ),
        }}>
        {props => <ProtectedRoute auth={auth} component={Carts} {...props} />}
      </TabStack.Screen>
      <TabStack.Screen
        name={ScreenNames.profile}
        component={Profile}
        options={{
          title: 'My Account',
          tabBarIcon: ({focused, color, size}) => (
            <AntDesign
              name="user"
              style={{fontSize: size, color: focused ? '#ffffff' : '#989898'}}
            />
          ),
        }}
      />
    </TabStack.Navigator>
  );
};

export default TabStackNavigator;
