import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StylesSheet } from 'react-native'

export default class MovieHome extends Component {
  render() {
      const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity 
            onPress={() =>
            navigation.navigate('NowPlaying')}>
            NowPlaying
        </TouchableOpacity>

        <TouchableOpacity 
            onPress={() =>
            navigation.navigate('TopRated')}>
            TopRated
        </TouchableOpacity>

        <TouchableOpacity 
            onPress={() =>
            navigation.navigate('MoviePopular')}>
            MoviePopular
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StylesSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
}) 