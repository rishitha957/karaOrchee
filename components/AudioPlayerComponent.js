import React, { useState, useEffect } from 'react';
import { Audio } from 'expo-av';

const AudioPlayerComponent = ({ audioAsset }) => {
    const [sound, setSound] = useState();

    useEffect(() => {
        // This function will load the sound into memory
        Audio.setAudioModeAsync({
            playsInSilentModeIOS: true,
        });
    }, []);
    useEffect(() => {
        // This function will unload the sound from memory when component unmounts
        
        return sound ? () => sound.unloadAsync() : undefined;
    }, [sound]);

  const playSound = async () => {
    console.log('Loading Sound');
    const { sound: newSound, status } = await Audio.Sound.createAsync(
      audioAsset,
      { shouldPlay: true }
    );
    setSound(newSound);

    if (!status.isLoaded) {
      // Handle error, unable to load the sound
      console.error('Failed to load the sound');
    }
  };

  const stopSound = async () => {
    console.log('Stopping Sound');
    if (sound && (await sound.getStatusAsync()).isPlaying) {
      await sound.stopAsync();
    }
  };

  return { playSound, stopSound };
};

export default AudioPlayerComponent;