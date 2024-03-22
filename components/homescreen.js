import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const musicData = [
  {
    id: '1',
    name: 'Name',
    type: 'Top Downloaded',
    increasePercent: '7%',
    decreasePercent: '3%',
    imageUrl: 'https://picsum.photos/200',
  },
  {
    id: '2',
    name: 'Name',
    type: 'Top Recorded',
    increasePercent: '7%',
    decreasePercent: '3%',  
    imageUrl: 'https://picsum.photos/id/85/200/300', 
  },
  {
    id: '3',
    name: 'Name',
    type: 'Top Streamed',
    increasePercent: '7%',
    decreasePercent: '3%',  
    imageUrl: 'https://picsum.photos/seed/picsum/200/300', 
  }
  // ... more music items
];

const recommendedData = [
  {
    id: 'a',
    title: 'Title',
    imageUrl: 'https://picsum.photos/id/68/200/300',
  },
  {
    id: 'b',
    title: 'Title',
    imageUrl: 'https://picsum.photos/id/31/200/300',
  },
  {
    id: 'c',
    title: 'Title',
    imageUrl: 'https://picsum.photos/id/103/200/300',
  },
  {
    id: 'd',
    title: 'Title',
    imageUrl: 'https://picsum.photos/id/91/200/300',
  },
  // ... more recommended items
];
const recentlyPlayedData = [
    {
      id: 'a',
      title: 'Title',
      imageUrl: 'https://picsum.photos/id/129/200/300',
    },
    {
      id: 'b',
      title: 'Title',
      imageUrl: 'https://picsum.photos/id/133/200/300',
    },
    {
      id: 'c',
      title: 'Title',
      imageUrl: 'https://picsum.photos/id/135/200/300',
    },
    {
      id: 'd',
      title: 'Title',
      imageUrl: 'https://picsum.photos/id/134/200/300',
    },
    // ... more recommended items
  ];

const HomeScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.musicItem}>
      <Image source={{ uri: item.imageUrl }} style={styles.musicImage} />
      <View style={styles.musicDetails}>
        <Text style={styles.musicName}>{item.name}</Text>
        <Text>{item.type}</Text>
        <View style={styles.stats}>
          <AntDesign name="caretup" size={12} color="green" />
          <Text>{item.increasePercent}</Text>
          <AntDesign name="caretdown" size={12} color="red" />
          <Text>{item.decreasePercent}</Text>
        </View>
      </View>
      <View style={styles.trendingDownload}>
            <AntDesign name="download" size={24} color="black" />
        </View>
    </View>
  );

  const renderRecommendedItem = ({ item }) => (
    <View style={styles.recommendedItem}>
      <Image source={{ uri: item.imageUrl }} style={styles.recommendedImage} />
      <Text style={styles.recommendedTitle}>{item.title} <AntDesign name="hearto" size={12} color="black" /> </Text>
      
    </View>
  );
  const renderRecentlyPlayedItem = ({ item }) => (
    <View style={styles.recentlyPlayedItem}>
      <Image source={{ uri: item.imageUrl }} style={styles.recentlyPlayedImage} />
      <Text style={styles.recommendedTitle}>{item.title} <AntDesign name="hearto" size={12} color="black" /> </Text>
      
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home</Text>
      <FlatList
        data={musicData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.subHeader}>Recently Played</Text>
      <FlatList
        horizontal
        data={recentlyPlayedData}
        renderItem={renderRecentlyPlayedItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
      <Text style={styles.subHeader}>Recommended</Text>
      <FlatList
        horizontal
        data={recommendedData}
        renderItem={renderRecommendedItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 44, // adjust this value to fit your design/system top bar
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 16,
    marginTop: 16,
  },
  musicItem: {
    flexDirection: 'row',
    paddingHorizontal: 3,
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  musicImage: {
    width: 50,
    height: 50,
    // borderRadius: 25,
    marginRight: 16,
  },
  musicDetails: {
    flex: 1,
  },
  musicName: {
    fontWeight: 'bold',
  },
  stats: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  trendingDownload: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginBottom:10,
    justifyContent: 'space-evenly'
  },
  subHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
    marginTop: 16,
  },
  recommendedItem: {
    // flex:1,
    width: 150,
    margin: 16,
    borderRadius: 8,
    overflow: 'scroll',
    alignItems: 'center',
    justifyContent: 'center',
  },
  recentlyPlayedItem: {
    // flex:1,
    width: 80,
    margin: 8,
    borderRadius: 5,
    overflow: 'scroll',
    alignItems: 'center',
    justifyContent: 'center',
  },
  recentlyPlayedImage:{
    width: 80,
    height: 80,
    marginBottom: 8,
  },
  recommendedImage: {
    width: '100%',
    height: 100,
    marginBottom: 10,
  },
  recommendedTitle: {
    // position: 'absolute',
    marginTop: 5,
    // bottom: 10,
    marginBottom: 5,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
