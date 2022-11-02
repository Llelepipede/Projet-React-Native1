import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Button,
  Image,
} from 'react-native';
import {FlatList} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import data from '../../../api_backup/marmiton/api.json';
import RecetteButton from '../../../components/RecetteButton';
import LogoMarmiton from '../../../components/LogoMarmiton';
import getFavoris from '../../../utils/getFavoris';

import styled from 'styled-components';

function RecetteDetail({tRecette}) {
  return (
    <View>
      <Text>Prout</Text>
    </View>
  );
}

export default RecetteDetail;
