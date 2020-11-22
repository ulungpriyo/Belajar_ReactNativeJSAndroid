import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import macbook from '../../assets/images/macbook.jpeg';

const Product = (props) => {
  return (
    <View style={styles.distanceWrapper}>
      <Image source={macbook} style={styles.image} />
      <Text style={styles.productName}>New Macbook Pro 2019</Text>
      <Text style={styles.productPrice}>Rp. 25.000.000,-</Text>
      <Text style={styles.productOrigin}>Jakarta Barat</Text>
      <TouchableOpacity onPress={props.onButtonPress}>
        <View style={styles.wrapperBuy}>
          <Text style={styles.buttonBuy}>Beli</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  distanceWrapper: {alignItems: 'center', paddingTop: 20},
  productName: {marginTop: 16, fontSize: 14, fontWeight: 'bold'},
  image: {width: 188, height: 107, borderRadius: 8},
  productPrice: {
    marginTop: 14,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#F2994A',
  },
  productOrigin: {fontSize: 12, fontWeight: '300', marginTop: 12},
  wrapperBuy: {
    backgroundColor: '#6FCF97',
    marginTop: 20,
    padding: 25,
    borderRadius: 25,
  },
  buttonBuy: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});
