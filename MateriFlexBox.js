import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';

/* Materi Flex Box */
class MateriFlexBox extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            backgroundColor: 'grey',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{backgroundColor: '#ee5253', width: 50, height: 50}} />
          <View style={{backgroundColor: '#feca57', width: 50, height: 50}} />
          <View style={{backgroundColor: '#1dd1a1', width: 50, height: 50}} />
          <View style={{backgroundColor: '#5f27cd', width: 50, height: 50}} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>Beranda</Text>
          <Text>Video</Text>
          <Text>Playlist</Text>
          <Text>Komunitas</Text>
          <Text>Channel</Text>
          <Text>Tentang</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: 20,
            marginLeft: 15,
          }}>
          <Image
            source={{
              uri:
                'https://lh3.googleusercontent.com/a-/AOh14GgjBmMk_7xOy1tbJwWLfrEiina4doYSSCNeU9xJTQ=s88-c-k-c0x00ffffff-no-rj-mo',
            }}
            style={{width: 100, height: 100, borderRadius: 50}}
          />
          <View style={{paddingLeft: 20}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Ulung Priyo Bintoro
            </Text>
            <Text>186 Subscriber</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default MateriFlexBox;
