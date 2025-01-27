import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const SubHeader = () => {
  return (
    <View>
      <LinearGradient
        colors={['#bbe8ef', '#bdeee9', '#c3f1e3']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.gradient}>
        <View style={styles.headerContent}>
          <TouchableOpacity>
            <EvilIcons
              name="location"
              size={25}
              color="black"
              style={styles.icon}
            />
          </TouchableOpacity>
          <Text style={styles.locationText}>
            Delivered to Lahore , Punjab 532003
          </Text>
          <TouchableOpacity>
            <Entypo
              name="chevron-small-down"
              size={25}
              color="black"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default SubHeader;

const styles = StyleSheet.create({
  gradient: {
    padding: 8,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 5,
  },
  locationText: {
    fontSize: 13,
    color: 'black',
    paddingHorizontal: 10,
  },
});
