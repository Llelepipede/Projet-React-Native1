import React from 'react';
import {Text, Image, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';
import getFavoris from '../../utils/getFavoris';
import AsyncStorage from '@react-native-async-storage/async-storage';

// factorisation du code: on cree un componnent Button
//    ->{onPress,label}: destructuration

const RecetteButton = ({tRecette, navigation}) => {
  const AddOrRemoveToFavorite = async element => {
    const localFavorite = await getFavoris();
    const index = localFavorite.findIndex(item => item.id === element.id);
    if (index === -1) {
      localFavorite.push(element);
      await AsyncStorage.setItem('favoris', JSON.stringify(localFavorite));
    } else {
      localFavorite.splice(index, 1);
      await AsyncStorage.setItem('favoris', JSON.stringify(localFavorite));
    }
  };
  return (
    <ProductDiv>
      <RecetteDiv onPress={props => navigation.navigate('RecetteDetail')}>
        <RecetteTitle>{tRecette.name}</RecetteTitle>
        <Thumbnail
          source={{
            uri: tRecette.thumbnail_url,
          }}
        />
      </RecetteDiv>
      <StarFavoris onPress={() => AddOrRemoveToFavorite(tRecette)}>
        <StarFavorisImage
          source={{
            uri: tRecette.thumbnail_url,
          }}
        />
      </StarFavoris>
    </ProductDiv>
  );
};

const ProductDiv = styled.View`
  /* display: flex;*/
  /* position: absolute; */
  /* justify-content: ; */
`;

const Thumbnail = styled.Image`
  width: 80%;
  height: 100px;
  background-image: '../../api_backup/img/system-software-update-upgrade-concept-loading-process-screen-vector-illustration_175838-2182.png';
`;
const StarFavoris = styled.TouchableOpacity`
  position: absolute;
  margin-left: 70%;
  margin-right: 25%;
  width: 20px;
  height: 20px;
  background-color: yellow;
`;

const StarFavorisImage = styled.Image``;

const RecetteDiv = styled.TouchableOpacity`
  width: 50%;
  height: 180px;
  background-color: orange;
  padding-left: 5%;
  padding-right: 5%;
  margin-left: 20%;
  margin-bottom: 2%;
`;

const RecetteTitle = styled.Text`
  font-size: 15px;
`;

export default RecetteButton;
