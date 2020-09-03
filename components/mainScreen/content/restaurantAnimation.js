import React, { useRef, useEffect, useState } from 'react';
import { Animated, FlatList, View, ScrollView, StyleSheet } from 'react-native';
import Restaurant from './restaurantComponents/restaurant';

const RestaurantAnimation = ({theme, currentIndex, setIsButtonActive}) => {
  const [displayRestaurant, setDisplayRestaurant] = useState(restaurants[0]);
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const translateAnim = useRef(new Animated.Value(0)).current;

  const afterAnimation = () => {
    if(currentIndex !== restaurants.length) {
      setIsButtonActive(true);
      setDisplayRestaurant(restaurants[currentIndex]);
      rotateAnim.setValue(0);
      translateAnim.setValue(0);
    }
  }

  useEffect(() => {
    if (currentIndex !== 0) {
      setIsButtonActive(false);
      Animated.parallel([
        Animated.timing(rotateAnim, {
          toValue: -0.3,
          duration: 400,
          useNativeDriver: true,
        }),

        Animated.timing(translateAnim, {
          toValue: -450,
          duration: 400,
        useNativeDriver: true,
        })
      ]).start(() => {afterAnimation()});
    }
  }, [currentIndex]);

  return (
    <Animated.View
      style={{
        ...styles.restaurantContainer,
        transform: [
          {rotate: rotateAnim},
          {translateX: translateAnim},
          { perspective: 1000 }
        ]
      }}>
      <Restaurant
        theme={theme}
        restaurant={displayRestaurant}
      />
    </Animated.View>
  );
}

export default RestaurantAnimation;

const styles = StyleSheet.create({
  restaurantContainer:{
    flex: 0.82,
    paddingLeft: '5%',
    paddingRight: '5%',
  }
});

const restaurants = [
  {
    id: 1,
    name: 'Bodrum Kitchen',
    rating: '4.5',
    delivery: true,
    pickup: true,
    price: 3,
    distance: 2,
    tags: [
      'Cafe Food',
      'Dessert',
      'Healthy',
    ],
  },
  {
    id: 2,
    name: 'Kiss Kiss',
    rating: '4.4',
    delivery: true,
    pickup: true,
    price: 1,
    distance: 3,
    tags: [
      'Thai',
      'Asian Fusion',
    ],
  },
  {
    id: 3,
    name: 'Mr India',
    rating: '3.9',
    delivery: true,
    pickup: false,
    price: 2,
    distance: 1,
    tags: [
      'Indian',
      'North Indian',
    ],
  },
  {
    id: 4,
    name: 'four',
    rating: '1.1',
    delivery: true,
    pickup: true,
    price: 1,
    distance: 2,
    tags: [
      'Cafe Food',
      'Dessert',
      'Healthy',
    ],
  },
  {
    id: 5,
    name: 'five',
    rating: '1.1',
    delivery: true,
    pickup: true,
    price: 1,
    distance: 2,
    tags: [
      'Cafe Food',
      'Dessert',
      'Healthy',
    ],
  },
  {
    id: 6,
    name: 'six',
    rating: '1.1',
    delivery: true,
    pickup: true,
    price: 1,
    distance: 2,
    tags: [
      'Cafe Food',
      'Dessert',
      'Healthy',
    ],
  },
  {
    id: 7,
    name: 'seven',
    rating: '1.1',
    delivery: true,
    pickup: true,
    price: 1,
    distance: 2,
    tags: [
      'Cafe Food',
      'Dessert',
      'Healthy',
    ],
  }
]
