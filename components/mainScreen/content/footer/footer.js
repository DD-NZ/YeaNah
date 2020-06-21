import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {addBackgroundColor} from '../../../../util/util';
import CircleButton from './circleButton';

const Footer = ({theme}) => {
  return (
    <View style={addBackgroundColor(styles.footer, theme.primaryBackground)}>
      <View style={styles.iconContainer}>
        <Icon name="arrow-left" color={theme.primary} size={25} />
      </View>
      <View style={styles.middleContainer}>
        <CircleButton
          backgroundColor={theme.secondryBackground}
          color={theme.primary}
          icon="times"
        />
        <CircleButton
          backgroundColor={theme.primary}
          color={theme.secondryBackground}
          icon="check"
        />
      </View>
      <View style={styles.iconContainer} />
    </View>
  );
}

export default Footer;

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
  }
});
