import React from 'react';
import { useEffect, useState } from 'react';
import { Audio } from 'expo-av';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import MusicScoreView from './MusicScoreView';
// import AudioPlayerComponent from './AudioPlayerComponent';

const AudioRecordScreen = () => {

    const onPressPlaceholder = () => {
        console.log('Button pressed');
    };
    const [sound, setSound] = useState();
  // This useEffect — fixes the bug you've encountered on iOS. Does work on normal sim 
  // but can't figure out how to turn up volume here in the snack for iOS sim
    useEffect(() => {
        Audio.setAudioModeAsync({
        playsInSilentModeIOS: true,
        });
    }, []);

    // Unload the song on clean up
    useEffect(() => {
        return sound
        ? () => {
            console.log('Unloading Sound');
            sound.unloadAsync();
            }
        : undefined;
    }, [sound]);

    const playSound = async () => {
        try {
        const { sound, status } = await Audio.Sound.createAsync(
            {
            uri: 'https://samplelib.com/lib/preview/mp3/sample-12s.mp3',
            }
        );
        setSound(sound);

        await sound.getStatusAsync();
        await sound.playAsync();
        console.log('Playing Sound', status);
        } catch (err) {
        console.log(err, 'the err - bad url e.g.');
        }
    };
    // const audioPlayer = AudioPlayerComponent({ uri: 'https://github.com/rishitha957/test-repo/blob/master/audio1.mp3' });

    const scoreImages = [
        // 'https://github.com/rishitha957/rated-g.ai-info/assets/46604699/fdc8f05c-e1d4-469a-8717-0838a213e8ef',
        'https://github.com/rishitha957/rated-g.ai-info/assets/46604699/bf625a15-d998-43e7-b146-d96055a64ced',
        // 'https://github.com/rishitha957/rated-g.ai-info/assets/46604699/5a4b1eb2-d01a-4116-b5bd-58e98df7f38f',
        // 'https://github.com/rishitha957/rated-g.ai-info/assets/46604699/28268044-212e-4531-afbb-e861c06d1079',
        // ... more URIs for each score image
    ];
    
    return (
        <View style={styles.container}>
            <View style={styles.detailsContainer}>
                <Image style={styles.thumbnail} source={require('../assets/Tchaikovsky.jpg')} />
                <View style={styles.artistInfoContainer}>
                <Text style={styles.artistNameContainer}>Tchaikovsky</Text>
                <Text >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                </Text>
            </View>
        </View>
            <View style={styles.container}>
                <MusicScoreView scoreImages={scoreImages} />
            </View>
          <View style={styles.controlsContainer}>
            <MaterialCommunityIcons name="tune" size={24} onPress={onPressPlaceholder} />
            <MaterialCommunityIcons name="replay" size={24} onPress={onPressPlaceholder} />
            <TouchableOpacity style={styles.recordButton} onPress={playSound}>
              <MaterialCommunityIcons name="record-circle" size={70} color="green" />
            </TouchableOpacity>
            <MaterialCommunityIcons name="skip-previous" size={24} onPress={onPressPlaceholder} />
            <MaterialCommunityIcons name="check" size={24} onPress={onPressPlaceholder} />
          </View>

        {/* </View> */}
    </View>);
};

  const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
      },
      detailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
      },
      thumbnail: {
        width: 100,
        height: 100,
        marginRight: 10,
      },
      artistInfoContainer:{
        flex: 1,
        alignItems: 'flex-start'
      },
      artistNameContainer:{
        flex: 1,
        alignItems: 'flex-start',
        fontWeight: 'bold',
        fontSize: 20
      },
      detailsText: {
        flex: 1,
        flexWrap: 'wrap',
      },
      waveformContainer: {
        // Style for your waveform goes here
        flex: 1, // You may want to adjust this depending on your layout
        justifyContent: 'center',
        alignItems: 'center',
      },
      controlsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingBottom: 20,
      },
      recordButton: {
        // Additional styles for the record button if needed
      },

  });

  export default AudioRecordScreen

