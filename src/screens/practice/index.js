import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

const Practice = props => {
  return (
    <SafeAreaView>
      <View>
        <Text>{props.title}</Text>
      </View>
    </SafeAreaView>
  );
};

//https://hp-api.herokuapp.com/api/characters/students

export default Practice;
