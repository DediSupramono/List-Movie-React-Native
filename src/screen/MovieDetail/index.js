import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class MovieDetail extends Component {
  render() {
    console.log(this.props);
    const {
      route: {
        params: {
          item: {
            title,
            overview
          }
        }
      }
    } = this.props;
    return (
      <View>
        <Text>{title}</Text>
        <Text>{overview}</Text>
      </View>
    )
  }
}
