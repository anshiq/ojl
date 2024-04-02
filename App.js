import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.navbarTitle}>My Gallery</Text>
    </View>
  );
};

const Gallery = () => {
  const images = [
    'https://w0.peakpx.com/wallpaper/1005/796/HD-wallpaper-one-piece-monkeydluffy-onepiece.jpg',
    'https://w0.peakpx.com/wallpaper/599/734/HD-wallpaper-one-piece-one-piece-anime.jpg',
    'https://w0.peakpx.com/wallpaper/292/166/HD-wallpaper-one-piece-ashura-doji-denjiro-one-piece-inuarashi-one-piece-kaido-one-piece-kawamatsu-one-piece-kikunojo-one-piece-kin-emon-one-piece-nekomamushi-one-piece-raizo-one-piece.jpg',
    'https://w0.peakpx.com/wallpaper/237/165/HD-wallpaper-one-piece-onepiece-luffy.jpg',
    // 'https://w0.peakpx.com/wallpaper/229/806/HD-wallpaper-one-piece-gear-5-one-piece-monkey-d-luffy.jpg',
    'https://w0.peakpx.com/wallpaper/1005/796/HD-wallpaper-one-piece-monkeydluffy-onepiece.jpg',
    'https://w0.peakpx.com/wallpaper/599/734/HD-wallpaper-one-piece-one-piece-anime.jpg',
    'https://w0.peakpx.com/wallpaper/292/166/HD-wallpaper-one-piece-ashura-doji-denjiro-one-piece-inuarashi-one-piece-kaido-one-piece-kawamatsu-one-piece-kikunojo-one-piece-kin-emon-one-piece-nekomamushi-one-piece-raizo-one-piece.jpg',
    'https://w0.peakpx.com/wallpaper/237/165/HD-wallpaper-one-piece-onepiece-luffy.jpg',
    'https://w0.peakpx.com/wallpaper/229/806/HD-wallpaper-one-piece-gear-5-one-piece-monkey-d-luffy.jpg',
  ];

  return (
    <ScrollView contentContainerStyle={styles.galleryContainer}>
      {images.map((image, index) => {
        const isEvenIndex = index % 2 === 0;
        const containerStyle = [
          styles.galleryRow,
          isEvenIndex ? styles.galleryRowEven : styles.galleryRowOdd,
        ];

        return (
          <View key={index} style={containerStyle}>
            <Image source={{ uri: image }} style={styles.galleryImage} />
          </View>
        );
      })}
    </ScrollView>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <Navbar />
      <Gallery />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    // height: 60,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom : 10
  },
  navbarTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  galleryContainer: {
    paddingVertical: 10,
  },
  galleryRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
    minHeight: 200, // Ensure at least two images are visible
  },
  galleryRowEven: {
    backgroundColor: '#f2f2f2',
  },
  galleryRowOdd: {
    backgroundColor: '#e6e6e6',
  },
  galleryImage: {
    width: 180,
    height: 180,
    marginHorizontal: 10,
  },
});

export default App;