import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MusicScoreView from './MusicScoreView';

const AudioRecordScreen = () => {
  const [sound, setSound] = useState();
  const [recording, setRecording] = useState();
  const [recordedAudio, setRecordedAudio] = useState();

  useEffect(() => {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      playsInSilentModeIOS: true,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      playThroughEarpieceAndroid: false,
    });
  }, []);

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

      const onPressPlaceholder = () => {
        console.log('Button pressed');
    };

  const playSound = async () => {
    console.log('Loading Sound');
    const { sound: newSound } = await Audio.Sound.createAsync(
      { uri: 'https://github.com/rishitha957/test-repo/blob/master/audio1.mp3?raw=true' },
      { shouldPlay: true }
    );
    setSound(newSound);
  };

  const startRecording = async () => {
    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      console.log('Starting recording..');
      const recording = new Audio.Recording();
      await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      await recording.startAsync();
      setRecording(recording);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  };

  const stopRecording = async () => {
    console.log('Stopping recording..');
    setRecording(undefined);
    // setSound(undefined);
    await recording.stopAndUnloadAsync();
    // await newSound.stopAndUnloadAsync();
    const uri = recording.getURI();
    setRecordedAudio({ uri });
    console.log('Recording stopped and stored at', uri);
    if (sound) {
      console.log('Stopping background music..');
      await sound.stopAsync();
      await sound.unloadAsync(); // Optional: Unload the sound from memory if you're done with it
      setSound(undefined);
    }
  };

  const playRecordedAudio = async () => {
    console.log('Playing recorded audio', recordedAudio.uri);
    const { sound: playbackSound } = await Audio.Sound.createAsync(
      { uri: recordedAudio.uri },
      { shouldPlay: true }
    );
    playbackSound.playAsync();
  };

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
            <MaterialCommunityIcons name="music-circle" size={24} onPress={playSound} />
            <TouchableOpacity style={styles.recordButton} onPress={startRecording}>
              <MaterialCommunityIcons name="record-rec" size={44} color="green" />
            </TouchableOpacity>
            <MaterialCommunityIcons name="stop-circle-outline" size={24} onPress={stopRecording} />
            <MaterialCommunityIcons name="play-circle" size={24} onPress={playRecordedAudio} />
          </View>
    </View>
  );
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

