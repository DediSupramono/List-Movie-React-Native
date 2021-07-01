import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import Axios from "axios";

export default class TopRated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listMovies: [],
      isLoading: true,
      isError: false,
    };
  }

  componentDidMount() {
    this.get();
  }

  async get() {
    try {
      const response = await Axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=e727655a9afab52dc2baa16622f7fae6"
      );
      this.setState({ listMovies: response.data.results });
      
    } catch (error) {
      this.setState({ isLoading: false, isError: true, listMovies: [] });
    }
  }

  renderItem(item) {
    const { navigation } = this.props;
    return (
        <TouchableOpacity style={styles.viewList} onPress={() => navigation.navigate('MovieDetail', {
          item
        })}>
          <View>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w780${item.backdrop_path}` }}
              style={styles.Image}
            />
          </View>
          <View style={styles.content}>
            <Text style={styles.textItemLogin}>{item.title}</Text>
            <Text style={styles.textItemUrl}> {item.release_date}</Text>
          </View>
        </TouchableOpacity>
      )
  }

  render() {
    return (
      <FlatList
        data={this.state.listMovies}
        renderItem={({ item }) => this.renderItem(item)}
        keyExtractor={({ id }, index) => index}
      />
    );
  }
}

const styles = StyleSheet.create({
  viewList: {
    height: 100,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#DDD",
    alignItems: "center",
    paddingHorizontal: 16,
    flex: 1,
  },
  Image: {
    width: 88,
    height: 80,
    borderRadius: 16,
  },
  textItemLogin: {
    fontWeight: "bold",
    textTransform: "capitalize",
    marginLeft: 20,
    fontSize: 16,
  },
  textItemUrl: {
    fontWeight: "bold",
    marginLeft: 20,
    fontSize: 12,
    marginTop: 10,
    color: "blue",
  },
  content: {
      flex: 1,
  }
});
