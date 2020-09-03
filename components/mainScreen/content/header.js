import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { addBackgroundColor } from './util/';
import Button from './sharedComponents/button'

const Header = ({ theme }) => {
  return (
    <View style={addBackgroundColor(styles.header, theme.primaryBackground)}>
      <TouchableOpacity activeOpacity={0.5} style={styles.iconContainer}>
        <Icon name="user" color={theme.primary} size={46}/>
      </TouchableOpacity>
      <View style={styles.middleContainer}/>
      <TouchableOpacity activeOpacity={0.5} style={styles.iconContainer}>
        <Icon name="sliders" color={theme.primary} size={46}/>
      </TouchableOpacity>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  header:{
    flexDirection: 'row',
    padding:10,
    flex: 0.08
  },
  iconContainer: {
    flex: 0.15,
    justifyContent:'center',
    alignItems: 'center',
  },
  middleContainer: {
    flex: 0.7
  }
});
