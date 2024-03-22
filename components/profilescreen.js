import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ProfileScreen = () => {
  // Dummy data for list items
  const settingsItems = [
    { key: 'Account', icon: 'person-outline' },
    { key: 'Language', icon: 'language' },
    { key: 'Preferences', icon: 'tune' },
    { key: 'Audio Quality', icon: 'high-quality' },
    { key: 'Data Saver', icon: 'data-saver-off' },
    { key: 'Storage', icon: 'storage' },
    { key: 'Socials', icon: 'people-outline' },
    { key: 'About', icon: 'info-outline' },
  ];

  return (
    <View style={styles.container}>
      {/* User information section */}
      <View style={styles.userInfoSection}>
        <Image
          source={require('../assets/profile_image.png')} // Replace with your avatar image
          style={styles.avatar}
        />
        <Text style={styles.name}>Last, First Name</Text>
        <Text style={styles.username}>@username</Text>
        <Text style={styles.followInfo}>X Followers · Y Following</Text>
      </View>

      {/* Settings list */}
      <FlatList
        data={settingsItems}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <MaterialIcons name={item.icon} size={24} style={styles.icon} />
            <Text style={styles.itemText}>{item.key}</Text>
            <MaterialIcons name="chevron-right" size={24} style={styles.icon} />
          </TouchableOpacity>
        )}
      />

      {/* Logout button */}
      <TouchableOpacity style={styles.logoutButton}>
        <MaterialIcons name="logout" size={24} color="#fff" />
        <Text style={styles.logoutButtonText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  userInfoSection: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginTop: 30,
    backgroundColor: '#e0e0e0', // Placeholder color
    alignItems: 'center'
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'right'
  },
  username: {
    fontSize: 16,
    color: 'grey',
  },
  followInfo: {
    fontSize: 16,
    color: 'grey',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#fff',
  },
  itemText: {
    flex: 1,
    marginLeft: 10,
  },
  icon: {
    color: 'grey',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#4CAF50',
    marginBottom: 20,
  },
  logoutButtonText: {
    marginLeft: 10,
    color: '#fff',
    fontSize: 18,
  },
});

export default ProfileScreen;
