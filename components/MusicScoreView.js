import React from 'react';
import { ScrollView, Image, Dimensions, StyleSheet } from 'react-native';

const MusicScoreView = ({ scoreImages }) => {

    // const source = { uri: 'https://github.com/rishitha957/rated-g.ai-info/files/14712748/Tchaikovsky_Piano.concerto_1_Mvt_1.pdf' };
        return (
            <ScrollView contentContainerStyle={styles.container}>
            {scoreImages.map((imageUri, index) => (
                console.log(index),
                <Image key={index} source={{ url: imageUri }} style={styles.scoreImage} />
            ))}
            </ScrollView>
        );
    };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreImage:{
    flex:1,
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
    resizeMode: 'contain',
    marginBottom: 10, 
  }
});

export default MusicScoreView;
