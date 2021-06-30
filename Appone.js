// import React from 'react';
import React, { Component } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, Image } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const App = () => (
      
        
  <SafeAreaView style={styles.container}>
    <View>
      <Image
          style={styles.tinyLogo}
          source={require('./assets/image/movie.png')}
        />
      <Text style={styles.title}>
        Film ACTION
      </Text>
      <Button
        title="Lihat Detail"
        color="#2834c5"
        onPress={() => Alert.alert('Film yang menceritakan tentang aksi para pemain')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        Film HOROR
      </Text>
      <Button
        title="Lihat Detail"
        color="#2834c5"
        onPress={() => Alert.alert('Film yang menceritakan tentang kejadian menyeramkan')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        Film KOMEDI
      </Text>
      <Button
        title="Lihat Detail"
        color="#2834c5"
        onPress={() => Alert.alert('Film yang menceritakan tentang kejadian lucu')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        Harap Baca dahulu sebelum memilih film
      </Text>
     
       <View style={styles.fixToText}>
        <Button
          title="Kembali"
          onPress={() => Alert.alert('Left button pressed')}
          color="#2834c5"
        />
        <Button
          title="Lanjut"
          onPress={() => Alert.alert('Right button pressed')}
          color="#2834c5"
        />
      </View>

    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;