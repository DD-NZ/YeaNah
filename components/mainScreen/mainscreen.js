import React from 'react';
import {View} from 'react-native';
import Header from './content/header';
import Footer from './content/footer/footer';
import RestaurantList from './content/restaurant/restaurant';

const MainScreen = ({theme}) => {
  return (
    <View style={{flex: 1}}>
      <Header theme={theme} />
      <RestaurantList theme={theme}/>
      <Footer theme={theme}/>
    </View>
  );
}

export default MainScreen;
