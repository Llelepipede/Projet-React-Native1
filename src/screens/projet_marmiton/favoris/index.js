import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import styled from 'styled-components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import getFavoris from '../../../utils/getFavoris';
import LoginForm from '../../../components/loginForm';
import LogoMarmiton from '../../../components/LogoMarmiton';
import RecetteButton from '../../../components/RecetteButton';

function Favoris({navigation}) {
  const [favoris, setFavoris] = useState([]);

  useFocusEffect(() => {
    const getLocalFavoris = async () => {
      const favoriteLocal = await getFavoris();
      setFavoris(favoriteLocal);
    };
    getLocalFavoris();
  });

  return (
    <View>
      <Text>Page Favorite</Text>
      <LogoMarmiton />
      <RecetteList
        data={favoris}
        renderItem={props => (
          <RecetteButton tRecette={props.item} navigation={navigation} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
  //   <View>
  //     <Text>Loading</Text>
  //   </View>
  // );
}
const RecetteList = styled.FlatList`
  height: 90%;
  /* border: 2px solid red; */
  /* display: grid; */
  /* flex-direction: wrap; */
  /* justify-content: space-between; */
`;

export default Favoris;
