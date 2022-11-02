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

const ListRecette = ({navigation}) => {
  const [recette, setRecette] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('start the get');
    console.log(data.results);
    setIsLoading(false);
    setRecette(data.results);
    //    ->const {username, password} = inputs: destructuration de inputs pour
    // recuperer username et password en tant que variable separer

    // axios({
    //   method: 'GET',
    //   url: 'https://tasty.p.rapidapi.com/recipes/list',
    //   params: {from: '0', size: '20'},
    //   headers: {
    //     'X-RapidAPI-Key': '2eb89bc3f1mshc34758fad5e37b3p17e518jsnd04e8741ce92',
    //     'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
    //   },
    // })
    //   .then(res => {
    //     console.log('fin du get');
    //     setIsLoading(false);
    //     setRecette(res.data);
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }, []);

  return isLoading ? (
    <View>
      <Text>Loading</Text>
      <Button
        title="Go back to Main Page"
        onPress={() => navigation.navigate('/')}
      />
    </View>
  ) : (
    <View>
      <LogoMarmiton />
      <Button
        title="Voir vos favoris"
        onPress={() => navigation.navigate('Favoris')}
      />
      <RecetteList
        data={recette}
        renderItem={props => (
          <RecetteButton tRecette={props.item} navigation={navigation} />
        )}
        keyExtractor={item => item.show_id}
      />
    </View>

    // <View>
    //   {recette.map(item => {
    //     return <RecetteButton tRecette={item} />;
    //   })}
    //   <Button
    //     title="Go back to Main Page"
    //     onPress={() => navigation.navigate('/')}
    //   />
    // </View>
  );
};

const RecetteList = styled.FlatList`
  height: 85%;
  /* border: 2px solid red; */
  /* display: grid; */
  /* flex-direction: wrap; */
  /* justify-content: space-between; */
`;

export default ListRecette;
