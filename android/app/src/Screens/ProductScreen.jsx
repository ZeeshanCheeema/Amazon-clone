import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {ProductData} from '../Data/ProductData';
import {getRating} from '../Utils/Helper';
import {SafeAreaView} from 'react-native-safe-area-context';

const ProductScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{paddingBottom: 60}}>
        <Text style={styles.heading}>Results</Text>
        <Text style={styles.subHeading}>
          Product details and price vary based on the product
        </Text>
        {ProductData.map(item => (
          <View key={item.id} style={styles.ProductSection}>
            <View style={styles.ImgSection}>
              <Image source={item.image} style={styles.ImgStyle} />
            </View>
            <View style={styles.DetailSection}>
              <Text style={styles.description}>Sponsored</Text>
              <Text style={styles.detail}>{item.productName}</Text>

              <View style={styles.Rating}>
                <Text style={styles.description}>{item.rating}</Text>
                {getRating(item.rating)}
                <Text style={{marginLeft: 5, fontSize: 12, color: 'grey'}}>
                  {item.ratingCount}
                </Text>
              </View>
              <View style={styles.prices}>
                <Text style={styles.price}>{item.price}</Text>
                <Text style={styles.mrpPrice}>{item.crossOutText}</Text>
              </View>
              <View>
                <Text style={styles.description}>
                  5% off by using Amazon Pay Credit Card
                </Text>
                <TouchableOpacity style={styles.Tick}>
                  <Feather
                    name={'check'}
                    size={17}
                    color={'orange'}
                    style={{fontWeight: 'bold'}}
                  />
                  <Text style={styles.prime}>Prime</Text>
                </TouchableOpacity>
                <Text style={styles.description}>
                  Free Delivery by {item.deliveryBy}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  // Container styles
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  subHeading: {
    fontSize: 14,
    fontWeight: '400',
    color: '#888',
    marginBottom: 6,
  },

  // Product section styles
  ProductSection: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  ImgSection: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
  },
  ImgStyle: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  DetailSection: {
    width: '60%',
    padding: 10,
  },

  // Text styles
  description: {
    fontSize: 12,
    fontWeight: '400',
    color: '#600',
    marginBottom: 4,
    paddingRight: 5,
  },
  detail: {
    fontSize: 14,
    fontWeight: '400',
    color: '#333',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginRight: 8,
  },
  mrpPrice: {
    fontSize: 14,
    fontWeight: '400',
    color: '#888',
    textDecorationLine: 'line-through',
  },
  prime: {
    fontSize: 14,
    fontWeight: '600',
    color: '#00A8E1',
    marginLeft: 4,
  },

  // Rating styles
  Rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  // Tick/Prime Section
  Tick: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  // Price Section
  prices: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },

  // Delivery/Offer Info
  deliveryInfo: {
    fontSize: 12,
    fontWeight: '400',
    color: '#333',
    marginBottom: 5,
  },
});
