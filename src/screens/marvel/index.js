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
import LoginForm from '../../components/loginForm';

import styled from 'styled-components';

const Stack = createNativeStackNavigator();

// 83158cd5048b0cb8f410ac680b2e3b54  public

// 0d05b90af2ff48609c8b6ac1fc71c74297b92a1e  private

// baf64aab2c1dcabf01561e594b56e758

// http://gateway.marvel.com/v1/public/comics?ts=1&apikey=83158cd5048b0cb8f410ac680b2e3b54&hash=37266a08408bea17f17452aa43794a0a

function Login({navigation}) {
  // creation des variable necessaire au login avec les useState
  // const [username, setUsername] = React.useState('');
  // const [password, setPassword] = React.useState('');
  // creation d'un state qui vas recupere toute les donnees quelque soit leur
  // nombre
  const [inputs, setInputs] = React.useState({
    username: '',
    password: '',
  });

  // creation de la fonction qui vas envoyer les donnees a l'API
  const submitForm = () => {
    //    ->const {username, password} = inputs: destructuration de inputs pour
    // recuperer username et password en tant que variable separer
    const {username, password} = inputs;

    axios({
      method: 'POST',
      url: 'https://easy-login-api.herokuapp.com/users/login',
      data: {
        username,
        password,
      },
    })
      // permet d'attendre que la methode POST s'execute avant d'afficher les
      // donnee.
      //   ->async: permet d'utiliser le mot cle "await" au sein de la fonction
      .then(async res => {
        console.log(res);
        // on recupere le token place dans le header du resultat de la requete
        await AsyncStorage.setItem('token', res.headers['x-access-token']);
        // change la page pour acceder a la page 'Characters'
        navigation.navigate('character');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View style={style.view_image}>
      <View>
        <Image
          style={style.logo_marvel}
          source={require('../../../img/marvel/Marvel_Logo.svg.png')}
        />
      </View>
      {/* creation du formulaire (comme dans todolist)*/}

      <LoginForm
        setInputs={setInputs}
        submitForm={submitForm}
        inputs={inputs}
      />
      <Button
        title="Go to character"
        onPress={() => navigation.navigate('character')}
      />
    </View>
  );
}

function Characters({navigation}) {
  const [char, setChar] = useState([]);

  useEffect(() => {
    //    ->const {username, password} = inputs: destructuration de inputs pour
    // recuperer username et password en tant que variable separer
    axios({
      method: 'GET',
      url: 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=83158cd5048b0cb8f410ac680b2e3b54&hash=37266a08408bea17f17452aa43794a0a&offset=0&limit=100',
    })
      // permet d'attendre que la methode POST s'execute avant d'afficher les
      // donnee.
      //   ->async: permet d'utiliser le mot cle "await" au sein de la fonction
      .then(res => {
        setChar(res.data.data.results);
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Characters</Text>
      {char.map(item => {
        return (
          <View>
            <Text>{item.name}</Text>
          </View>
        );
      })}
      <Button title="Go to Login" onPress={() => navigation.navigate('/')} />
    </View>
  );
}

const Marvel = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="/"
          component={Login}
          options={{title: 'Connectez-vous'}}
        />
        <Stack.Screen
          name="character"
          component={Characters}
          options={{title: 'Character'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const style = StyleSheet.create({
  logo_marvel: {
    height: 200,
    width: '100%',
    backgroundColor: 'red',
  },
  view_image: {
    height: 200,
    width: '100%',
  },
});

// const ImageLogo = styled.image`
//   width: 100%;
//   height: 200px;
// `;

export default Marvel;
