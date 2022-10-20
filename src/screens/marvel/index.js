import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Button,
  Image,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import styled from 'styled-components';

const Stack = createNativeStackNavigator();

function Login({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <ImageLogo
          source={require('../../../img/marvel/Marvel_Logo.svg.png')}
        />
      </View>
      <Text>Login</Text>
      <Button
        title="Go to character"
        onPress={() => navigation.navigate('character')}
      />
    </View>
  );
}

function Characters({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Characters</Text>
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
        <Stack.Screen name="character" component={Characters} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const style =StyleSheet.create({
//   logo_marvel: {
//     height: 200,
//     width: "100%",
//     backgroundColor: 'red'
//   },
//   view_image: {
//     height: 200,
//     width: "100%",

//   }
// })

const ImageLogo = styled.image`
  width: 100%;
  height: 200px;
`;

export default Marvel;
