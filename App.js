import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './store';

import AuthScreen from './screens/AuthScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import MapScreen from './screens/MapScreen'
import DeckScreen from './screens/DeckScreen'
import SettingsScreen from './screens/SettingsScreen'
import ReviewScreen from './screens/ReviewScreen'

const AuthTab = createBottomTabNavigator();
const MainTab = createBottomTabNavigator();
const StackTab = createStackNavigator();

export default function App() {

  const Stack = ({ navigation }) =>
  <StackTab.Navigator>
    <StackTab.Screen name="Review" component={ReviewScreen}
      options={{
        title: 'Review Jobs',
        headerRight: () =>
          <TouchableOpacity
            onPress={() => navigation.navigate('Settings')}
            style={{ marginHorizontal: 10, padding: 10}}
          >
            <Text style={{ color: '#329ba8', fontWeight: 'bold' }}>Settings</Text>
          </TouchableOpacity>
      }}
    />
    <StackTab.Screen name="Settings" component={SettingsScreen} />
  </StackTab.Navigator>

  const Main = () =>
    <MainTab.Navigator>
      <MainTab.Screen name="Map" component={MapScreen} />
      <MainTab.Screen name="Deck" component={DeckScreen} />
      <MainTab.Screen name="Stack" component={Stack} options={{ title: "Review Jobs" }}  />
    </MainTab.Navigator>

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthTab.Navigator initialRouteName="Welcome" lazy={true} screenOptions={{tabBarVisible: false}}>
          <AuthTab.Screen name="Welcome" component={WelcomeScreen} />
          <AuthTab.Screen name="Auth" component={AuthScreen} />
          <AuthTab.Screen name="Main" component={Main} />
        </AuthTab.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  );
}
