import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import deal from '../Assets/recommend.jpg';

const Deals = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Recommended deals for You</Text>
      <TouchableOpacity>
        <Image source={deal} style={styles.dealImg} />
      </TouchableOpacity>
      <View style={styles.dealContainer}>
        <View style={styles.dealBox}>
          <Text style={styles.discountText}>18% OFF</Text>
        </View>
        <Text style={styles.dealText}>Deal</Text>
      </View>

      <View style={styles.prices}>
        <Text style={styles.price}>$ 32.4 </Text>
        <Text style={styles.mrpLabel}>M.R.P </Text>
        <Text style={styles.mrpPrice}>$ 40 </Text>
      </View>
      <Text style={styles.description}>
        Nykee Facewash Gentle Men Skin Cleaner
      </Text>
      <TouchableOpacity>
        <Text style={styles.viewDeals}>See All Deals</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Deals;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  heading: {
    fontSize: 16,
    fontWeight: '600',
    paddingBottom: 10,
    color: '#333',
  },
  dealImg: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  dealContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  dealBox: {
    backgroundColor: '#FF6347',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  discountText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  dealText: {
    color: '#FF6347',
    fontSize: 14,
    fontWeight: '600',
  },
  prices: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  price: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginRight: 5,
  },
  mrpLabel: {
    fontSize: 10,
    fontWeight: '400',
    color: '#222',
    marginHorizontal: 5,
  },
  mrpPrice: {
    fontSize: 11,
    fontWeight: '400',
    color: '#222',
    textDecorationLine: 'line-through',
  },
  description: {
    fontSize: 14,
    fontWeight: 600,
    color: 'black',
    paddingVertical: 5,
  },
  viewDeals: {
    fontSize: 16,
    color: '#017185',
    fontWeight: '500',
    marginVertical: 10,
  },
});
