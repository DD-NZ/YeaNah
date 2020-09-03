import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RestaurantInfoBox = ({ theme, mainText, secondryText }) => (
  <View style={{backgroundColor: theme.infoBoxBackground, ...styles.container}}>
    <Text style={styles.mainText}>{mainText}</Text>
    <Text style={styles.secondryText}>{secondryText}</Text>
  </View>
);

export default RestaurantInfoBox;

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'column',
    borderRadius: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 10,
  },
  mainText:{
    textAlign: 'center',
    fontSize: 14,
  },
  secondryText: {
    textAlign: 'center',
    fontSize: 11,
  },
});
