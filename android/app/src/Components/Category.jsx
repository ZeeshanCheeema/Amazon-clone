import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Categories} from '../Data/Catergories';
import {useNavigation} from '@react-navigation/native';
import ProductScreen from '../Screens/ProductScreen';

const Category = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scrollContainer}>
      {Categories.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.categoryContainer}
          onPress={() => navigation.navigate('Product')}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Category;

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 10,
  },
  categoryContainer: {
    alignItems: 'center',
    marginRight: 15,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5,
  },
  title: {
    fontSize: 14,
    color: '#000',
  },
});
