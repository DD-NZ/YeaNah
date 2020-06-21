import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const RestaurantImage = ({theme}) => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={require('../../../../assets/kisskiss.png')}
        style={styles.image}
      />
    </View>
  );
}

export default RestaurantImage;

const styles = StyleSheet.create({
  imageContainer:{
    height: '75%',
    borderRadius: 10
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
    resizeMode: 'stretch',
    borderRadius: 10
  }
});
