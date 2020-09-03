import React, { memo } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { addBackgroundColor } from '../util';
import RestaurantImage from './restaurantImage'
import RestaurantInfo from './restaurantInfo'

const Restaurant = ({ theme, restaurant }) => (
  <View style={addBackgroundColor({width:370}, theme.primaryBackground)}>
    <RestaurantImage/>
    <RestaurantInfo theme={theme} info={restaurant}/>
  </View>
);

export default memo(Restaurant);
