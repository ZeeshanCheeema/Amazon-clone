import {StyleSheet, View, ScrollView} from 'react-native'; // ScrollView to make it scrollable
import React from 'react';
import Header from '../Components/Header';
import SubHeader from '../Components/SubHeader';
import Category from '../Components/Category';
import Slider from '../Components/Slider';
import Services from '../Components/Services';
import Deals from '../Components/Deals';
import Brands from '../Components/Brands';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <SubHeader />
      <Category />
      <Slider />
      <Services />
      <Deals />
      <Brands />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
