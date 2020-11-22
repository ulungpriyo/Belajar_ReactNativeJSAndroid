import React, {Component} from 'react';
import {View, Text, TextInput, Image} from 'react-native';

/* Materi SampleComponent */
const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#0ABDE3'}} />
      <Text>Ulung</Text>
      <Priyo />
      <Text>Shinta</Text>
      <Text>Desnia</Text>
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
      <Profile />
    </View>
  );
};

const Priyo = () => {
  return <Text>Priyo Bintoro</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{
        uri:
          'https://images.pexels.com/photos/5840188/pexels-photo-5840188.jpeg',
      }}
      style={{width: 100, height: 100}}
    />
  );
};

class BoxGreen extends Component {
  render() {
    return <Text>Ini Component dari Class</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{
            uri:
              'https://images.pexels.com/photos/1580625/pexels-photo-1580625.jpeg',
          }}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <Text style={{color: 'blue', fontSize: 24}}>Ini Tulisan</Text>
      </View>
    );
  }
}

export default SampleComponent;
