
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MovieMain from '../screen/MovieMain';
import MovieDetail from '../screen/MovieDetail';
import React from 'react';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MovieMain">
        <Stack.Screen name="MovieMain" component={MovieMain} />
        <Stack.Screen name="MovieDetail" component={MovieDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
