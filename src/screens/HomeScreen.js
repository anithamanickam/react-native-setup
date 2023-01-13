import React from 'react';
import { Button, View } from 'react-native';

const HomeScreen = ({ navigation }) => (
  <View>
    <Button title="First" onPress={() => navigation.navigate('First')} />
    <Button title="Second" onPress={() => navigation.navigate('Second')} />
  </View>
);

export default HomeScreen;
