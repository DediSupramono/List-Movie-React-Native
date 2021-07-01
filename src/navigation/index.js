
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NowPlaying from '../screen/NowPlaying';
import MovieDetail from '../screen/MovieDetail';
import MoviePopular from '../screen/MoviePopular';
import TopRated from '../screen/TopRated';
import MovieHome from '../screen/MovieHome';
import React from 'react';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MovieHome">
        <Stack.Screen name="NowPlaying" component={NowPlaying} />
        <Stack.Screen name="MovieDetail" component={MovieDetail} />
        <Stack.Screen name="MoviePopular" component={MoviePopular} />
        <Stack.Screen name="TopRated" component={TopRated} />
        <Stack.Screen name="MovieHome" component={MovieHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
