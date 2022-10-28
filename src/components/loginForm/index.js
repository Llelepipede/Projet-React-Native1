import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {NavigationButton} from '../button';

const LoginForm = ({setInputs, inputs, submitForm}) => {
  return (
    // {/*    ...inputs: spread operator, permet de recupere tout un tableau*/}
    // {/* etant donne qu'on a plus qu'un seul useState, il faut que tout soit*/}
    // {/* stoquer dans une seul constane , ici , inputs.*/}
    // {/*    ->{text => setInputs({...inputs, username: text})}*/}
    // {/*         permet de , dans inputs, changer "username", pour y mettre la*/}
    // {/* valeur de texte.*/}
    <View>
      <Text>Username</Text>
      <TextInput
        onChangeText={text => setInputs({...inputs, username: text})}
        value={inputs.username}
      />
      <Text>Password</Text>
      <TextInput
        onChangeText={text => setInputs({...inputs, password: text})}
        value={inputs.password}
      />
      <NavigationButton label="SUBMIT" onPress={submitForm} />
    </View>
  );
};

export default LoginForm;
