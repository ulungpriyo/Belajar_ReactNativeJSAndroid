import React from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';
import macbook from '../../assets/images/macbook.jpeg';

/* Materi StylingReactNativeComponent */
const StylingComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#0ABDE3',
          borderWidth: 2,
          borderColor: 'purple',
          marginTop: 20,
          marginLeft: 20,
        }}
      />
      <View
        style={{
          padding: 12,
          backgroundColor: '#F2F2F2',
          width: 212,
          borderRadius: 8,
        }}>
        <Image
          source={macbook}
          style={{width: 188, height: 107, borderRadius: 8}}
        />
        <Text style={{marginTop: 16, fontSize: 14, fontWeight: 'bold'}}>
          New Macbook Pro 2019
        </Text>
        <Text
          style={{
            marginTop: 14,
            fontSize: 12,
            fontWeight: 'bold',
            color: '#F2994A',
          }}>
          Rp. 25.000.000,-
        </Text>
        <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>
          Jakarta Barat
        </Text>
        <View
          style={{
            backgroundColor: '#6FCF97',
            marginTop: 20,
            paddingVertical: 6,
            borderRadius: 25,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            Beli
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginLeft: 20,
    marginTop: 40,
  },
});

export default StylingComponent;
