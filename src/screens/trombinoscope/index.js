import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';

const axios = require('axios').default;

const Trombinoscope = props => {
  const [tromb, setTromb] = useState([]);
  const [Load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      getHP();
    }, 2000);
  }, []);

  const getHP = async () => {
    // Make a request for a user with a given ID
    axios({
      method: 'get',
      url: 'http://hp-api.herokuapp.com/api/characters/students',
    })
      .then(response => {
        // handle success
        setTromb(response.data);
        setLoad(false);
        console.log(response);
      })
      .catch(error => {
        // handle error
        console.log(error);
        setLoad(false);
      });
  };

  return (
    <SafeAreaView>
      <View>
        <Text>trombinoscope</Text>
      </View>
      <Text>
        {tromb.map(stud => {
          return (
            <View>
              <Text>{stud.name}</Text>
            </View>
          );
        })}
      </Text>
    </SafeAreaView>
  );
};

export default Trombinoscope;

//https://hp-api.herokuapp.com/api/characters/students
