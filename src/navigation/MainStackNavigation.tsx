/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import DiscoverScreen from '../screens/Discover';
import WalletScreen from '../screens/Wallet';
import BrowserScreen from '../screens/Browser';
import SettingScreen from '../screens/Setting';

// Store
import constants from '../config/constants';
import {RootState} from '../store';

const Sta = createStackNavigator();
const Tab = createBottomTabNavigator();

function BottomBarNavigation() {
  const {colors} = useTheme();
  const {theme} = useSelector((state: RootState) => state.app);
  const _barStyle =
    theme === constants.THEME_DARK ? 'light-content' : 'dark-content';

  return (
    <>
      <StatusBar
        barStyle={_barStyle}
        backgroundColor={colors.background}
        animated
      />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#e91e63',
          tabBarLabelStyle: {display: 'none'},
        }}>
        <Tab.Screen
          name="Discover"
          component={DiscoverScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Ionicons name="stats-chart" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Wallet"
          component={WalletScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Ionicons name="wallet" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Browser"
          component={BrowserScreen}
          options={{
            tabBarIcon: ({color}) => (
              <FontAwesome name="safari" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            tabBarBadge: 3,
            tabBarIcon: ({color}) => (
              <Ionicons name="settings" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

function MainStackNavigation() {
  // const {loading} = useSelector((state: RootState) => state.app.loading);
  // const {colors} = useTheme();
  return (
    <>
      <Sta.Navigator screenOptions={{headerShown: false}}>
        <Sta.Screen name="Home" component={BottomBarNavigation} />
      </Sta.Navigator>
      {/* {loading && (
        <Portal>
          <BlurView
            style={[
              StyleSheet.absoluteFill,
              {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 50,
              },
            ]}>
            <View
              style={{
                backgroundColor: colors.background,
                padding: 20,
                borderRadius: 15,
              }}>
              <ActivityIndicator size={50} />
            </View>
          </BlurView>
        </Portal>
      )} */}
    </>
  );
}

export default MainStackNavigation;
