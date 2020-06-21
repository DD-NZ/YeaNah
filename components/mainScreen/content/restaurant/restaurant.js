import React from 'react';
import {View, StyleSheet} from 'react-native';
import {addBackgroundColor} from '../../../../util/util';
import RestaurantImage from './restaurantImage'
import RestaurantInfo from './restaurantInfo'

const RestaurantList = ({theme}) => {
  return (
    <View
      style={addBackgroundColor(
        styles.restaurantContainer,
        theme.primaryBackground,
      )}>
      <RestaurantImage/>
      <RestaurantInfo/>
    </View>
  );
}

export default RestaurantList;

const styles = StyleSheet.create({
  restaurantContainer:{
    flex: 0.82,
    paddingLeft: '5%',
    paddingRight: '5%'
  }
});
