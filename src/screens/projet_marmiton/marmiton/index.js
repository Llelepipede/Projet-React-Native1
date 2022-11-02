import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Button,
  Image,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import axios from 'axios';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginMarmiton from '../login';
import ListRecette from '../listRecette';
import Favoris from '../favoris';
import RecetteDetail from '../recetteDetail';

import styled from 'styled-components';

const Stack = createNativeStackNavigator();

const Marmiton = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="/"
          component={LoginMarmiton}
          options={{title: 'Marmiton'}}
        />
        <Stack.Screen
          name="ListRecette"
          component={ListRecette}
          options={{title: 'Nos Recettes'}}
        />
        <Stack.Screen
          name="Favoris"
          component={Favoris}
          options={{title: 'Vos Favoris'}}
        />
        <Stack.Screen
          name="RecetteDetail"
          component={RecetteDetail}
          options={{title: 'v'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Marmiton;
