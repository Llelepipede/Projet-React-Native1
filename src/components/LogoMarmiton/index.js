import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

// factorisation du code: on cree un componnent Button
//    ->{onPress,label}: destructuration

const LogoMarmiton = () => {
  return (
    <LogoMarmi
      source={require('../../api_backup/img/logo-marmiton-22-600x395.jpg')}
    />
  );
};

const LogoMarmi = styled.Image`
  width: 100%;
  height: 70px;
  padding-bottom: -10px;
  background-color: red;
`;

export default LogoMarmiton;
