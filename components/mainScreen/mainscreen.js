import React, { useState, useCallback, memo }  from 'react';
import { View } from 'react-native';

import Header from './content/header';
import Footer from './content/footer';
import RestaurantAnimation from './content/restaurantAnimation';

const MainScreen = ({ theme }) => {
  const [index, setIndex] = useState(0);
  const [isButtonActive, setIsButtonActive] = useState(true);

  const yeaOnPressHandler = useCallback(() => {
    if (isButtonActive) {
      setIndex(index + 1);
    }
  }, [isButtonActive, index]);

  return (
    <View style={{flex: 1}}>
      <Header theme={theme} />
      <RestaurantAnimation theme={theme} currentIndex={index} setIsButtonActive={setIsButtonActive} />
      <Footer theme={theme} yeaOnPressHandler={yeaOnPressHandler} />
    </View>
  );
}

export default MainScreen;
