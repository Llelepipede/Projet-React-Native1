import AsyncStorage from '@react-native-async-storage/async-storage';

const getFavoris = async () => {
  const favoriteLocal = JSON.parse(await AsyncStorage.getItem('favoris'));
  return favoriteLocal ? favoriteLocal : [];
};

export default getFavoris;
