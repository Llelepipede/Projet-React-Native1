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

const RecetteDetail = ({route}) => {
  const [recette, setRecette] = React.useState(route.params.tRecette);

  useEffect(() => {
    console.log(recette);
  });

  return (
    <View>
      <Text>{recette.name}</Text>
      <View>
        {recette.instructions.map(item => {
          return <Text>{item.display_text}</Text>;
        })}
      </View>
    </View>
  );
};

export default RecetteDetail;
