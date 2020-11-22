import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ShortBio from '../../assets/images/short_bio.svg';

const ReactNativeSvg = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textTitle}>
        Materi menggunakan File SVG di dalam React Native
      </Text>
      <ShortBio width={244} height={125} />
    </View>
  );
};

export default ReactNativeSvg;

const styles = StyleSheet.create({
  wrapper: {padding: 25},
  textTitle: {textAlign: 'center'},
});
