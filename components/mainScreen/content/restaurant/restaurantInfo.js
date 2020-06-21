import React from 'react';
import {View, StyleSheet} from 'react-native';

const RestaurantInfo = ({theme}) => {
  return (
    <View style={styles.infoContainer}>
    
    </View>
  );
}

export default RestaurantInfo;

const styles = StyleSheet.create({
  infoContainer:{
    height: '30%',
    backgroundColor: 'white',
    marginLeft: '3%',
    marginRight: '3%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    position: 'relative',
    zIndex: 1000,
    top: '-8%'
  }
});
