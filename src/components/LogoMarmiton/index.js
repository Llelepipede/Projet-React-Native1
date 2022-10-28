import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

// factorisation du code: on cree un componnent Button
//    ->{onPress,label}: destructuration

const LogoMarmiton = ({tRecette}) => {
  console.log(tRecette.thumbnail_url);
  return (
    <TouchableOpacity>
      <LogoMarmi
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/fr/thumb/a/a8/Logo_Marmiton_%282011%29.svg/2560px-Logo_Marmiton_%282011%29.svg.png',
        }}
      />
    </TouchableOpacity>
  );
};

const LogoMarmi = styled.Image`
  width: 100%;
  height: 100px;
`;

export default LogoMarmiton;
