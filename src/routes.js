/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Home from './screens/Home';
import Detail from './screens/Detail';
import About from './screens/About';
import Category from './screens/Category';
import Cards from './screens/Cards';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: 'rgba(0, 0, 0, 0.4)',
        tabBarActiveBackgroundColor: 'rgba(0, 0, 0, 0.025)',
      }}
    >
      <Tab.Screen
        name="Início"
        component={MyStack}
        options={{
          tabBarIcon: ({ color, size }) => (<AntDesign name="home" color={color} size={size} />),
          tabBarActiveTintColor: 'crimson',
        }}
      />
      <Tab.Screen
        name="Categorias"
        component={Category}
        options={{
          tabBarIcon: ({ color, size }) => (<MaterialIcons name="category" color={color} size={size} />),
          tabBarActiveTintColor: 'steelblue',
        }}
      />
      <Tab.Screen
        name="Sobre a loja"
        component={About}
        options={{
          tabBarIcon: ({ color, size }) => (<Feather name="info" color={color} size={size} />),
          tabBarActiveTintColor: 'teal',
        }}
      />
      <Tab.Screen
        name="Cartões"
        component={Cards}
        options={{
          tabBarIcon: ({ color, size }) => (<AntDesign name="creditcard" color={color} size={size} />),
          tabBarActiveTintColor: 'orange',
        }}
      />
    </Tab.Navigator>
  );
}

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Início" component={Home} />
      <Stack.Screen name="Categorias" component={Category} />
      <Stack.Screen name="Sobre a loja" component={About} />
      <Stack.Screen name="Cartões" component={Cards} />
      <Stack.Screen name="Details" component={Detail} />
    </Stack.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <MyTab />
    </NavigationContainer>
  );
}
