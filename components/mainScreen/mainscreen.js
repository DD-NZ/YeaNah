import React from 'react';
import {View} from 'react-native';
import Header from './content/header';
import Footer from './content/footer/footer';
import RestaurantList from './content/restaurant/restaurant';
import {getInitialData} from '../../actions/restaurant'



const MainScreen = ({theme}) => {
  getInitialData();
  return (
    <View style={{flex: 1}}>
      <Header theme={theme} />
      <RestaurantList theme={theme}/>
      <Footer theme={theme}/>
    </View>
  );
}

export default MainScreen;
