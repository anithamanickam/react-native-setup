import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import FirstScreen from './src/screens/FirstScreen';
import SecondScreen from './src/screens/SecondScreen';
import store from './src/shared/store';
import { Provider } from 'react-redux';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen component={HomeScreen} name="Home" />
          <Stack.Screen component={FirstScreen} name="First" />
          <Stack.Screen component={SecondScreen} name="Second" />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
