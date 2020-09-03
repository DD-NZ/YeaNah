import React, { memo } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {addBackgroundColor} from './util';
import Button from './sharedComponents/button';

const Footer = ({ theme, yeaOnPressHandler }) => (
  <View style={addBackgroundColor(styles.footer, theme.primaryBackground)}>
    <View style={styles.iconContainer}>
      <Icon name="arrow-left" color={theme.primary} size={25} />
    </View>
    <View style={styles.middleContainer}>
      <Button
        icon='times'
        onPressHandler={()=>{}}
        backgroundColor={theme.secondryBackground}
        color={theme.primary}
        iconSize={40}
        containerStyle={styles.icon}
      />
      <Button
        icon='check'
        onPressHandler={yeaOnPressHandler}
        backgroundColor={theme.primary}
        color={theme.secondryBackground}
        iconSize={40}
        containerStyle={styles.icon}
      />
    </View>
    <View style={styles.iconContainer} />
  </View>
);

export default memo(Footer);

const styles = StyleSheet.create({
  footer:{
    flexDirection: 'row',
    flex: 0.1,
    padding: 10,
  },
  iconContainer: {
    flex: 0.225,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleContainer: {
    flex: 0.55,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  icon: {
    flex: 0.30,
    borderRadius: 10000,
  }
});
