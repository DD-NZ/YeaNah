import * as React from 'react';
import MainScreen from './components/mainScreen/mainscreen';

const theme = {
  primary: '#fd274d',
  primaryBackground: '#f4f4f4',
  secondryBackground: '#ffffff',
  infoBoxBackground: '#fff0f3',
  tagsText:'#828282',
};

export default function App() {
  return (
      <MainScreen theme={theme}/>
  );
}
