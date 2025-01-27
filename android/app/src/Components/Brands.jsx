import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Brand1 from '../Assets/brand1.jpeg';
import Brand2 from '../Assets/brand2.jpeg';
import Brand3 from '../Assets/brand3.jpeg';
import Brand4 from '../Assets/brand4.jpeg';

const Brands = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Brands</Text>
      <View style={styles.brandsContainer}>
        <TouchableOpacity style={styles.productBox}>
          <Image source={Brand1} style={styles.img} />
          <Text style={styles.text}>Min 20% off - Diamond Necklace</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.productBox}>
          <Image source={Brand2} style={styles.img} />
          <Text style={styles.text}>Min 30% off - Apple watch</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.brandsContainer}>
        <TouchableOpacity style={styles.productBox}>
          <Image source={Brand3} style={styles.img} />
          <Text style={styles.text}>Min 20% off -Laddies Heals</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.productBox}>
          <Image source={Brand4} style={styles.img} />
          <Text style={styles.text}>Min 30% off - Sony Speaker</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Brands;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  heading: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  brandsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  productBox: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 1, // Adds shadow for Android
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4, // Adds shadow for iOS
    marginBottom: 10,
    padding: 10,
    alignItems: 'center',
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 14,
    color: '#555',
    marginTop: 8,
    textAlign: 'center',
  },
});
