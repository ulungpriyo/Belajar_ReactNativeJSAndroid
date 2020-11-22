import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import shoppingcart from '../../assets/icons/shoppingcart.png';

const Cart = (props) => {
  return (
    <View>
      <View style={styles.distanceWrapper}>
        <View style={styles.cartWrapper}>
          <Image source={shoppingcart} style={styles.iconCart} />
          <Text style={styles.notif}>{props.quantity}</Text>
        </View>
        <Text style={styles.textCart}>Keranjang Belanja Anda</Text>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  distanceWrapper: {
    alignItems: 'center',
  },
  textCart: {
    paddingTop: 8,
    fontSize: 12,
    fontWeight: '500',
    color: '#777777',
  },
  notif: {
    fontSize: 12,
    color: 'white',
    backgroundColor: '#6FCF9C',
    padding: 18 / 4,
    borderRadius: 25,
    width: 24,
    height: 24,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  cartWrapper: {
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    position: 'relative',
    marginTop: 40,
  },
  iconCart: {width: 50, height: 50},
});
