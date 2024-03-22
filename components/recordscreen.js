import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import AudioRecordScreen from './audiorecordscreen';

// Sample data for the list of music samples
const musicSamples = [
  {
    id: '1',
    title: 'Sample 1',
    artist: 'Tchaikovsky',
    description: 'Add some description here',
    thumbnail: 'https://github.com/rishitha957/rated-g.ai-info/assets/46604699/8b722260-54e8-44aa-a8f6-536e7b44659d',
    // thumbnailUrl: '../assets/Tchaikovsky.jpg',
  },
  {
    id: '2',
    title: 'Sample 2',
    artist: 'Beethoven',
    description: 'Add some more description or Lore here',
    thumbnail: 'https://github.com/rishitha957/rated-g.ai-info/assets/46604699/99eb5875-3226-4054-8115-a58e6faf464f',
    // thumbnailUrl: 'https://via.placeholder.com/150',
  },
  {
    id: '3',
    title: 'Sample 1',
    artist: 'Tchaikovsky',
    description: 'Add some description here',
    thumbnail: 'https://github.com/rishitha957/rated-g.ai-info/assets/46604699/8b722260-54e8-44aa-a8f6-536e7b44659d',
    // thumbnailUrl: '../assets/Tchaikovsky.jpg',
  },
  {
    id: '4',
    title: 'Sample 2',
    artist: 'Beethoven',
    description: 'Add some more description or Lore here',
    thumbnail: 'https://github.com/rishitha957/rated-g.ai-info/assets/46604699/99eb5875-3226-4054-8115-a58e6faf464f',
    // thumbnailUrl: 'https://via.placeholder.com/150',
  },
  {
    id: '5',
    title: 'Sample 1',
    artist: 'Tchaikovsky',
    description: 'Add some description here',
    thumbnail: 'https://github.com/rishitha957/rated-g.ai-info/assets/46604699/8b722260-54e8-44aa-a8f6-536e7b44659d',
    // thumbnailUrl: '../assets/Tchaikovsky.jpg',
  },
  {
    id: '6',
    title: 'Sample 2',
    artist: 'Beethoven',
    description: 'Add some more description or Lore here',
    thumbnail: 'https://github.com/rishitha957/rated-g.ai-info/assets/46604699/99eb5875-3226-4054-8115-a58e6faf464f',
    // thumbnailUrl: 'https://via.placeholder.com/150',
  },
  {
    id: '7',
    title: 'Sample 1',
    artist: 'Tchaikovsky',
    description: 'Add some description here',
    thumbnail: 'https://github.com/rishitha957/rated-g.ai-info/assets/46604699/8b722260-54e8-44aa-a8f6-536e7b44659d',
    // thumbnailUrl: '../assets/Tchaikovsky.jpg',
  },
  {
    id: '8',
    title: 'Sample 2',
    artist: 'Beethoven',
    description: 'Add some more description or Lore here',
    thumbnail: 'https://github.com/rishitha957/rated-g.ai-info/assets/46604699/99eb5875-3226-4054-8115-a58e6faf464f',
    // thumbnailUrl: 'https://via.placeholder.com/150',
  },
  // ... more samples
];

const RecordScreen = ({ navigation}) => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
        <TouchableOpacity style={styles.playButton} onPress={() => navigation.navigate('Record')}>
          <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
          <View style={styles.overlayPlayButton}>
            <MaterialIcons name="play-arrow" size={40} color="white" />
          </View>
        </TouchableOpacity>
        <View style={styles.title}>
          <Text style={styles.artist}>{item.artist}</Text>
          <Text >{item.description}</Text>
        </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={musicSamples}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  thumbnail: {
    width: 80,
    height: 80,
    // borderRadius: 25,
    marginRight: 16,
    alignItems: 'flex-start',
    opacity: 0.85,
  },
  overlayPlayButton: {
    position: 'absolute', 
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%', 
    height: '100%', 
    marginLeft: 30,
    opacity: 0.45,
    shadowColor: '#7F5DF0',
  },
  title: {
    flex: 1,
  },
  artist:{
    fontSize: 25,
    fontWeight: 'bold',
  },  
  playButton: {
    padding: 8,
    // backgroundColor: 'orange',
    // borderRadius: 16,
  },
});

export default RecordScreen;
