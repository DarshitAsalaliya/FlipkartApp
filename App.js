// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import 'react-native-gesture-handler';

import * as React from 'react';
import { useRef } from 'react';
import { View, TouchableOpacity, Image, Text, Button } from 'react-native';

import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BottomSheet from 'react-native-simple-bottom-sheet';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'

import ShopScreen from './screens/ShopScreen';
import SuperCoinScreen from './screens/SuperCoinScreen';
import VideoScreen from './screens/VideoScreen';
import GameZoneScreen from './screens/GameZoneScreen';
import AllCategories from './screens/AllCategories';
import ChooseLanguage from './screens/ChooseLanguage';
import MyAccount from './screens/MyAccount';
import MyRewards from './screens/MyRewards';
import MyWishlist from './screens/MyWishlist';
import MyNotification from './screens/MyNotification';
import MyOrders from './screens/MyOrders';
import MyChat from './screens/MyChat';
import MyCart from './screens/MyCart';
import MoreOnFlipkart from './screens/MoreOnFlipkart';
import FlipkartPlusZone from './screens/FlipkartPlusZone';
import OfferZone from './screens/OfferZone';
import NotificationPreferences from './screens/NotificationPreferences';
import LoginScreen from './screens/Login';
import { Menu } from 'react-native-paper';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function MenuScreen() {
  return (<View style={{ flex: 1, justifyContent: "center" }}>

    <BottomSheet>
      <FontAwesome5 name="rupee-sign" size={25} color="#686868" style={{ width: 40, height: 35, marginLeft: "47%" }} />
    </BottomSheet>

  </View>);
}

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

const BackButtonStructure = ({ navigationProps }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigationProps.goBack()}>
        <MaterialCommunityIcons name="arrow-left" size={35} color="#FFF" style={{ width: 40, height: 35, }} />
      </TouchableOpacity>
    </View>
  );
}

const RightButtonStructureForShopScreen = ({ navigationProps }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={() => navigationProps.navigate('Notification')}>
        <MaterialCommunityIcons name="bell" size={20} color="#FFF" style={{ width: 40, height: 20, }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigationProps.navigate('Cart')}>
        <MaterialCommunityIcons name="cart" size={20} color="#FFF" style={{ width: 40, height: 20, }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigationProps.navigate('Login')}>
        <Text style={{ color: "#FFF", marginRight: 8 }}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

const getHeaderTitle = (route) => {

  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Shop';

  switch (routeName) {
    case 'Shop':
      return <View><Image
        style={{ width: 75, height: 20, resizeMode: "contain" }}
        source={{
          uri: "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png",
        }}
      /></View>;
    case 'SuperCoin':
      return 'Super Coin';
    case 'Video':
      return 'Video';
    case 'GameZone':
      return 'Game Zone';
  }
};

const BottomTabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="ShopScreen"
      tabBarOptions={{
        activeTintColor: '#2874F0',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: '#fff'
        },
        labelStyle: {
          textAlign: 'center',
        },
      }}
    >
      <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          tabBarLabel: 'Shop',
          tabBarIcon: ({ color, size, focused }) => (
            <Entypo name="shop" size={25} style={{ color: focused ? '#2874F0' : '#686868' }} />
          ),

        }}
      />
      <Tab.Screen
        name="SuperCoin"
        component={SuperCoinScreen}
        options={{
          tabBarLabel: 'SuperCoin',
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome5 name="coins" size={25} style={{ color: focused ? '#2874F0' : '#686868' }} />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons name="microsoft-xbox-controller-menu" size={35} color="#686868" />
          ),
        }}

      />
      <Tab.Screen
        name="Video"
        component={VideoScreen}
        options={{
          tabBarLabel: 'Video',
          tabBarIcon: ({ color, size, focused }) => (
            <Entypo name="video" size={25} style={{ color: focused ? '#2874F0' : '#686868' }} />
          ),
        }}
      />
      <Tab.Screen
        name="GameZone"
        component={GameZoneScreen}
        options={{
          tabBarLabel: 'Game Zone',
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome name="gamepad" size={25} style={{ color: focused ? '#2874F0' : '#686868' }} />
          ),
        }}
      />

    </Tab.Navigator>
  );
};

const ShopScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name=" "
        component={BottomTabStack}
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),
          headerLeft: () => (
            <NavigationDrawerStructure
              navigationProps={navigation}
            />
          ),
          headerRight: () => (
            <RightButtonStructureForShopScreen navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#2874F0', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'normal', //Set Header text style
          },
        })}
      />
      <Stack.Screen

        options={{
          headerTitle: "Flipkart",
          headerStyle: {
            backgroundColor: '#2874F0',      
           
          },
          headerTintColor: '#fff',
          headerTitleAlign: "center",
        }}

        name="Login" component={LoginScreen} />
      <Stack.Screen name="Notification" component={MyNotification} />
      <Stack.Screen name="Cart" component={MyCart} />
    </Stack.Navigator>
  );
};

const SuperCoinScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="SuperCoinScreen">
      <Stack.Screen
        name="SuperCoinScreen"
        component={BottomTabStack}
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),
          headerLeft: () => (
            <NavigationDrawerStructure
              navigationProps={navigation}
            />
          ),
          headerStyle: {
            backgroundColor: '#2874F0', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'normal', //Set Header text style
          },
        })}
      />
    </Stack.Navigator>
  );
};

const VideoScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="VideoScreen">
      <Stack.Screen
        name="Video"
        component={BottomTabStack}
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),
          headerLeft: () => (
            <NavigationDrawerStructure
              navigationProps={navigation}
            />
          ),
          headerStyle: {
            backgroundColor: '#2874F0', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'normal', //Set Header text style
          },
        })}
      />
    </Stack.Navigator>
  );
};

const GameZoneScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="GameZoneScreen">
      <Stack.Screen
        name="GameZone"
        component={BottomTabStack}
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),
          headerLeft: () => (
            <NavigationDrawerStructure
              navigationProps={navigation}
            />
          ),
          headerStyle: {
            backgroundColor: '#2874F0', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'normal', //Set Header text style
          },
        })}
      />
    </Stack.Navigator>
  );
};

const AllCategoriesStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="AllCategories">
      <Stack.Screen
        name="All Categories"
        component={AllCategories}
        options={({ route }) => ({
          headerTitle: "All Categories",
          headerLeft: () => (
            <BackButtonStructure
              navigationProps={navigation}
            />
          ),
          headerStyle: {
            backgroundColor: '#2874F0', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'normal', //Set Header text style
          },
        })}
      />
    </Stack.Navigator>
  );
};

const ChooseLanguageStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="ChooseLanguage">
      <Stack.Screen
        name="Choose Language"
        component={ChooseLanguage}
        options={({ route }) => ({
          headerTitle: "Choose Language",
          headerLeft: () => (
            <BackButtonStructure
              navigationProps={navigation}
            />
          ),
          headerStyle: {
            backgroundColor: '#2874F0', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'normal', //Set Header text style
          },
        })}
      />
    </Stack.Navigator>
  );
};

const FlipkartPlusZoneStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="FlipkartPlusZone">
      <Stack.Screen
        name="Flipkart Plus Zone"
        component={FlipkartPlusZone}
        options={({ route }) => ({
          headerTitle: "Flipkart Plus Zone",
          headerLeft: () => (
            <BackButtonStructure
              navigationProps={navigation}
            />
          ),
          headerStyle: {
            backgroundColor: '#2874F0', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'normal', //Set Header text style
          },
        })}
      />
    </Stack.Navigator>
  );
};

const MoreOnFlipkartStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="MoreOnFlipkart">
      <Stack.Screen
        name="More On Flipkart"
        component={MoreOnFlipkart}
        options={({ route }) => ({
          headerTitle: "More On Flipkart",
          headerLeft: () => (
            <BackButtonStructure
              navigationProps={navigation}
            />
          ),
          headerStyle: {
            backgroundColor: '#2874F0', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'normal', //Set Header text style
          },
        })}
      />
    </Stack.Navigator>
  );
};

const MyAccountStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="MyAccount">
      <Stack.Screen
        name="MyAccount"
        component={MyAccount}
        options={({ route }) => ({
          headerTitle: "My Account",
          headerLeft: () => (
            <BackButtonStructure
              navigationProps={navigation}
            />
          ),
          headerStyle: {
            backgroundColor: '#2874F0', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'normal', //Set Header text style
          },
        })}
      />
    </Stack.Navigator>
  );
};

const MyCartStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="MyCart">
      <Stack.Screen
        name="MyCart"
        component={MyCart}
        options={({ route }) => ({
          headerTitle: "My Cart",
          headerLeft: () => (
            <BackButtonStructure
              navigationProps={navigation}
            />
          ),
          headerStyle: {
            backgroundColor: '#2874F0', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'normal', //Set Header text style
          },
        })}
      />
    </Stack.Navigator>
  );
};

const MyChatStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="MyChat">
      <Stack.Screen
        name="MyChat"
        component={MyChat}
        options={({ route }) => ({
          headerTitle: "My Chat",
          headerLeft: () => (
            <BackButtonStructure
              navigationProps={navigation}
            />
          ),
          headerStyle: {
            backgroundColor: '#2874F0', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'normal', //Set Header text style
          },
        })}
      />
    </Stack.Navigator>
  );
};

const MyNotificationStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="MyNotification">
      <Stack.Screen
        name="MyNotification"
        component={MyNotification}
        options={({ route }) => ({
          headerTitle: "My Notification",
          headerLeft: () => (
            <BackButtonStructure
              navigationProps={navigation}
            />
          ),
          headerStyle: {
            backgroundColor: '#2874F0', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'normal', //Set Header text style
          },
        })}
      />
    </Stack.Navigator>
  );
};

const MyOrdersStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="MyOrders">
      <Stack.Screen
        name="MyOrders"
        component={MyOrders}
        options={({ route }) => ({
          headerTitle: "My Orders",
          headerLeft: () => (
            <BackButtonStructure
              navigationProps={navigation}
            />
          ),
          headerStyle: {
            backgroundColor: '#2874F0', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'normal', //Set Header text style
          },
        })}
      />
    </Stack.Navigator>
  );
};

const MyRewardsStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="MyRewards">
      <Stack.Screen
        name="MyRewards"
        component={MyRewards}
        options={({ route }) => ({
          headerTitle: "My Rewards",
          headerLeft: () => (
            <BackButtonStructure
              navigationProps={navigation}
            />
          ),
          headerStyle: {
            backgroundColor: '#2874F0', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'normal', //Set Header text style
          },
        })}
      />
    </Stack.Navigator>
  );
};

const MyWishlistStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="MyWishlist">
      <Stack.Screen
        name="MyWishlist"
        component={MyWishlist}
        options={({ route }) => ({
          headerTitle: "My Wishlist",
          headerLeft: () => (
            <BackButtonStructure
              navigationProps={navigation}
            />
          ),
          headerStyle: {
            backgroundColor: '#2874F0', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'normal', //Set Header text style
          },
        })}
      />
    </Stack.Navigator>
  );
};

const NotificationPreferencesStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="NotificationPreferences">
      <Stack.Screen
        name="NotificationPreferences"
        component={NotificationPreferences}
        options={({ route }) => ({
          headerTitle: "Notification Preferences",
          headerLeft: () => (
            <BackButtonStructure
              navigationProps={navigation}
            />
          ),
          headerStyle: {
            backgroundColor: '#2874F0', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'normal', //Set Header text style
          },
        })}
      />
    </Stack.Navigator>
  );
};

const OfferZoneStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="OfferZone">
      <Stack.Screen
        name="OfferZone"
        component={OfferZone}
        options={({ route }) => ({
          headerTitle: "Offer Zone",
          headerLeft: () => (
            <BackButtonStructure
              navigationProps={navigation}
            />
          ),
          headerStyle: {
            backgroundColor: '#2874F0', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'normal', //Set Header text style
          },
        })}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>

      <Drawer.Navigator

        drawerContentOptions={{
          itemStyle: { marginVertical: -4 },
          activeBackgroundColor: 'none',
        }}

        drawerStyle={{
          backgroundColor: '#fff',
          width: 340,
        }}

      >
        <Drawer.Screen
          name="Home"
          options={{
            drawerLabel: 'Home',
            drawerIcon: ({ color, size }) => (<MaterialCommunityIcons name="home" size={20} color="#686868" />),
          }}
          component={ShopScreenStack}
        />
        <Drawer.Screen
          name="Flipkart Plus Zone"
          options={{
            drawerLabel: 'Flipkart Plus Zone',
            drawerIcon: ({ color, size }) => (<MaterialCommunityIcons name="shield-plus" size={20} color="#686868" />),
          }}

          component={FlipkartPlusZoneStack}
        />
        <Drawer.Screen
          name="All Categories"
          options={{ drawerLabel: 'All Categories', drawerIcon: ({ color, size }) => (<MaterialCommunityIcons name="table" size={20} color="#686868" />), }}
          component={AllCategoriesStack}
        />
        <Drawer.Screen
          name="More on Flipkart"
          options={{ drawerLabel: 'More on Flipkart', drawerIcon: ({ color, size }) => (<MaterialCommunityIcons name="text-box" size={20} color="#686868" />), }}
          component={MoreOnFlipkartStack}
        />
        <Drawer.Screen
          name="Choose Language"
          options={{ drawerLabel: 'Choose Language', drawerIcon: ({ color, size }) => (<MaterialCommunityIcons name="microsoft-xbox-controller-menu" size={20} color="#686868" />), }}
          component={ChooseLanguageStack}
        />
        <Drawer.Screen
          name="Offer Zone"
          options={{ drawerLabel: 'Offer Zone', drawerIcon: ({ color, size }) => (<MaterialCommunityIcons name="ticket-percent" size={20} color="#686868" />), }}
          component={OfferZoneStack}
        />
        <Drawer.Screen
          name="Sell on Flipkart"
          options={{ drawerLabel: 'Sell on Flipkart', drawerIcon: ({ color, size }) => (<MaterialCommunityIcons name="checkbox-multiple-marked-circle" size={20} color="#686868" />), }}
          component={VideoScreenStack}
        />
        <Drawer.Screen
          name="My Orders"
          options={{ drawerLabel: 'My Orders', drawerIcon: ({ color, size }) => (<MaterialCommunityIcons name="bag-personal" size={20} color="#686868" />), }}
          component={MyOrdersStack}
        />
        <Drawer.Screen
          name="My Rewards"
          options={{ drawerLabel: 'My Rewards', drawerIcon: ({ color, size }) => (<MaterialCommunityIcons name="notebook-outline" size={20} color="#686868" />), }}
          component={MyRewardsStack}
        />
        <Drawer.Screen
          name="My Cart"
          options={{ drawerLabel: 'My Cart', drawerIcon: ({ color, size }) => (<MaterialCommunityIcons name="cart" size={20} color="#686868" />), }}
          component={MyCartStack}
        />
        <Drawer.Screen
          name="My Wishlist"
          options={{ drawerLabel: 'My Wishlist', drawerIcon: ({ color, size }) => (<MaterialCommunityIcons name="heart" size={20} color="#686868" />), }}
          component={MyWishlistStack}
        />
        <Drawer.Screen
          name="My Account"
          options={{ drawerLabel: 'My Account', drawerIcon: ({ color, size }) => (<MaterialCommunityIcons name="account" size={20} color="#686868" />), }}
          component={MyAccountStack}
        />
        <Drawer.Screen
          name="My Notification"
          options={{ drawerLabel: 'My Notification', drawerIcon: ({ color, size }) => (<MaterialCommunityIcons name="bell" size={20} color="#686868" />), }}
          component={MyNotificationStack}
        />
        <Drawer.Screen
          name="My Chat"
          options={{ drawerLabel: 'My Chat', drawerIcon: ({ color, size }) => (<MaterialCommunityIcons name="chat" size={20} color="#686868" />), }}
          component={MyChatStack}

        />
        <Drawer.Screen
          name="Notification Preferences"
          options={{ drawerLabel: 'Notification Preferences' }}
          component={NotificationPreferencesStack}
        />
        <Drawer.Screen
          name="Help Center"
          options={{ drawerLabel: 'Help Center' }}
          component={VideoScreenStack}
        />
        <Drawer.Screen
          name="Privacy Policy"
          options={{ drawerLabel: 'Privacy Policy' }}
          component={VideoScreenStack}
        />
        <Drawer.Screen
          name="Legal"
          options={{ drawerLabel: 'Legal' }}
          component={VideoScreenStack}
        />
      </Drawer.Navigator>

    </NavigationContainer>
  );
};

export default App;