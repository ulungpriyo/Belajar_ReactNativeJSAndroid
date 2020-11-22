import React from 'react';
import {View, ScrollView} from 'react-native';
import StylingComponent from './pages/StylingComponent';
import SampleComponent from './pages/SampleComponent';
import FlexBox from './pages/FlexBox/';
import Position from './pages/Position/';

const App = () => {
  return (
    <View>
      <ScrollView>
        <SampleComponent />
        <StylingComponent />
        <FlexBox />
        <Position />
      </ScrollView>
    </View>
  );
};

export default App;
