import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const BasicJavascript = () => {
  // Primitive
  const name = 'Ulung Priyo Bintoro'; // String
  let age = 24; // Number
  const isMan = true; // Boolean

  // complex
  const hewanPeliharaan = {
    nama: 'Miaw',
    jenis: 'Kucing',
    usia: 2,
    apakahHewanLokal: true,
    warna: 'kuning',
    orangTua: {
      jantan: 'Kaisar',
      betina: 'Kuin',
    },
  }; // Object

  const sapaOrang = (nama, age) => {
    return console.log(`Helo ${name} usia anda ${age}`); // Hello Ulung usia anda 24
  };

  sapaOrang('Ulung', 24);

  const namaOrang = [
    'Ulung',
    'Shinta',
    'Desnia',
    'Priyo',
    'Al-fatih',
    'Mehmed',
  ]; //Object

  typeof namaOrang; // Object

  // Jika hujan turun, maka kalau kerja bawa payung.
  // Jika perut lapar, maka harus makan.

  // if (hewanPeliharaan.nama === 'Miaw') {
  //   console.log('Hallo Miaw');
  // } else {
  //   console.log('Hewan siapa ini?');
  // }

  const sapaHewan = (objectHewan) => {
    let hasilSapa = '';
    // if (objectHewan.nama === 'Miaw') {
    //   hasilSapa = 'Hallo Miaw, apa kabar';
    // } else {
    //   hasilSapa = 'Ini Hewan Siapa?';
    // }
    // return hasilSapa;
    return objectHewan.nama === 'Miaw'
      ? 'Hallo miaw apa kabar?'
      : 'Ini Hewan siapa?';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>
        Materi Basic Javascript di React Native
      </Text>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
      <Text>{sapaHewan(hewanPeliharaan)}</Text>
      <Text>{namaOrang[0]} </Text>
      <Text>{namaOrang[1]} </Text>
      <Text>{namaOrang[2]} </Text>
      <Text>==============</Text>
      {namaOrang.map((orang) => (
        <Text>{orang}</Text>
      ))}
    </View>
  );
};

export default BasicJavascript;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'},
});
