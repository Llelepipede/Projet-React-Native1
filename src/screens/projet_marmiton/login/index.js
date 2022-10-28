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

import styled from 'styled-components';

function LoginMarmiton({navigation}) {
  // creation de la fonction qui vas envoyer les donnees a l'API

  return (
    <View>
      {/* creation du formulaire (comme dans todolist)*/}
      <Button
        title="voir nos recettes"
        onPress={() => navigation.navigate('ListRecette')}
      />
    </View>
  );
}

export default LoginMarmiton;
