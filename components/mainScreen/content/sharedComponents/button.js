import React, { memo } from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { addBackgroundColor } from '../util';

const Button = ({ color, backgroundColor, icon, iconSize, text, onPressHandler, containerStyle, textStyle }) => (
  <TouchableOpacity
    activeOpacity={0.7}
    style={
      {
        ...styles.container,
        ...containerStyle,
        backgroundColor: backgroundColor,
        color: color,
      }
    }
    onPress={onPressHandler}
  >
    { icon &&
      <Icon name={icon} color={color} size={iconSize} />
    }
    { text &&
      <Text
        style={
          {
            ...textStyle,
            color: color,
          }
        }
      >{text}</Text>
    }
  </TouchableOpacity>
);

export default memo(Button);

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  },
});
