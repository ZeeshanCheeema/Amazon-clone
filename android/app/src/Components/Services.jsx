import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import amazon from '../Assets/amazon-pay.png';
import bill from '../Assets/pay-bills.jpeg';
import scan from '../Assets/scan-qr.jpeg';
import money from '../Assets/send-money.jpg';
import {RecentSearch} from '../Data/RecentSearch';

const Services = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.Container}>
        <View>
          <TouchableOpacity style={styles.innerContainer}>
            <Image source={amazon} style={styles.img} />
            <Text style={styles.title}>Amazon Pay</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.innerContainer}>
            <Image source={bill} style={styles.img} />
            <Text style={styles.title}>Pay Bills</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.innerContainer}>
            <Image source={scan} style={styles.img} />
            <Text style={styles.title}>Scan QR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.innerContainer}>
            <Image source={money} style={styles.img} />
            <Text style={styles.title}>Send Money</Text>
          </TouchableOpacity>
        </View>
      </View>

      {RecentSearch.length > 0 ? (
        RecentSearch.map(item => (
          <View style={styles.Container} key={item.id}>
            <TouchableOpacity style={styles.RecentContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Image source={item.image} style={styles.searchImg} />
            </TouchableOpacity>
          </View>
        ))
      ) : (
        <View style={styles.Container}>
          <Text style={styles.title}>No recent searches available.</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default Services;

const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  searchImg: {
    width: 150,
    height: 150,
    borderRadius: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    paddingVertical: 10,
    flexWrap: 'wrap',
    textAlign: 'center',
  },

  Container: {
    flexDirection: 'row',
    marginLeft: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    marginVertical: 5,
    width: 200,
  },
  RecentContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
});
