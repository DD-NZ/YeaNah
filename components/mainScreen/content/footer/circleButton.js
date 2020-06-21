import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {addBackgroundColor} from '../../../../util/util';

const CircleButton = ({backgroundColor, color, icon}) => {
  return (
    <View style={addBackgroundColor(styles.buttonContainer, backgroundColor)}>
      <Icon name={icon} color={color} size={40} />
    </View>
  );
}

export default CircleButton;

const styles = StyleSheet.create({
  buttonContainer:{
    flex: 0.35,
    borderRadius: 10000,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  }
});
