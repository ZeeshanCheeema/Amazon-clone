import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = () => {
  return (
    <View>
      <LinearGradient
        colors={['#88dae0', '#9ee4d4', '#98e1d6']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.gradient}>
        <View style={styles.headerContent}>
          <View style={styles.searchContainer}>
            <Ionicons
              name="search"
              size={22}
              color="grey"
              style={styles.icon}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Search Amazon.in"
              placeholderTextColor="grey"
            />
            <TouchableOpacity>
              <AntDesign
                name="scan1"
                size={22}
                color="grey"
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Feather name="mic" size={22} color="grey" style={styles.micIcon} />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  gradient: {
    padding: 10,
    justifyContent: 'center',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    flex: 1, // Makes the search bar take the remaining width
    paddingHorizontal: 10,
    height: 40,
  },
  icon: {
    marginHorizontal: 5,
  },
  textInput: {
    flex: 1,
    color: '#000',
    fontSize: 16,
  },
  micIcon: {
    marginLeft: 10, // Adds spacing between the mic icon and the search container
  },
});
