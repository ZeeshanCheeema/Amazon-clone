import React, {useState, useRef} from 'react';
import {
  View,
  Image,
  FlatList,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {CarouselData} from '../Data/CarouselData';

const Slider = () => {
  const {width} = Dimensions.get('window'); // Correctly extract width from Dimensions
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current index of the slider
  const flatListRef = useRef(null); // Ref for FlatList

  const viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 50, // When 50% of the item is visible, it will update the index
  };

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.slide}>
      <Image source={item.image} style={[styles.image, {width: width * 0.9}]} />
    </TouchableOpacity>
  );

  const onViewableItemsChanged = useRef(({viewableItems}) => {
    if (viewableItems && viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  });

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={CarouselData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled // Enable paging so that items snap into place
        onViewableItemsChanged={onViewableItemsChanged.current} // Listen for visible item changes
        viewabilityConfig={viewabilityConfig} // Set viewability config to track the current item
        style={styles.flatList}
      />

      {/* <View style={styles.pagination}>
        <TouchableOpacity
          style={styles.pageButton}
          onPress={() => {
            const nextIndex = (currentIndex + 1) % CarouselData.length; // Loop back to the first item
            flatListRef.current.scrollToIndex({
              index: nextIndex,
              animated: true,
            });
          }}>
          <Image
            source={CarouselData[currentIndex].image}
            style={styles.paginationImage}
          />
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatList: {
    flex: 1,
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  image: {
    height: 200,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  pagination: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20,
    padding: 10,
  },
  pageButton: {
    padding: 1,
    borderRadius: 10,
    backgroundColor: '#ddd',
    marginTop: -10,
  },
  paginationImage: {
    width: 10,
    height: 10,
    borderRadius: 20,
  },
});
