import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

// factorisation du code: on cree un componnent Button
//    ->{onPress,label}: destructuration

const RecetteButton = ({tRecette}) => {
  console.log(tRecette.thumbnail_url);
  return (
    <TouchableOpacity>
      <Image
        width={100}
        height={100}
        source={{
          uri: 'https://s3.amazonaws.com/video-api-prod/assets/f313dd1bf578499ea1cfa804750283d5/SpicyMango.jpg',
        }}
        style={{
          width: 100,
          height: 100,
        }}
      />
      <Text>{tRecette.name}</Text>
    </TouchableOpacity>
  );
};

const Thumbnail = styled.Image`
  width: 100px;
  height: 100px;
  background-color: red;
`;

export default RecetteButton;
