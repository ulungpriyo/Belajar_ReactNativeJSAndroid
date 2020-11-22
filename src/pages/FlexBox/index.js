import React, {Component, useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';

/* Materi Flex Box */
// class FlexBox extends Component {
//   constructor(props) {
//     super(props);
//     console.log('==> constructor');
//     this.state = {
//       subscriber: 100,
//     };
//   }

//   componentDidMount() {
//     console.log('==> ComponentDidMount');
//     setTimeout(() => {
//       this.setState({
//         subscriber: 400,
//       });
//     }, 2000);
//   }

//   componentDidUpdate() {
//     console.log('==> Component Did Update');
//   }

//   componentWillUnmount() {
//     console.log('==> Component Will Unmount');
//   }

//   render() {
//     console.log('==> Render');
//     return (
//       <View>
//         <View
//           style={{
//             backgroundColor: 'grey',
//             flexDirection: 'row',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//           }}>
//           <View style={{backgroundColor: '#ee5253', width: 50, height: 50}} />
//           <View style={{backgroundColor: '#feca57', width: 50, height: 50}} />
//           <View style={{backgroundColor: '#1dd1a1', width: 50, height: 50}} />
//           <View style={{backgroundColor: '#5f27cd', width: 50, height: 50}} />
//         </View>
//         <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
//           <Text>Beranda</Text>
//           <Text>Video</Text>
//           <Text>Playlist</Text>
//           <Text>Komunitas</Text>
//           <Text>Channel</Text>
//           <Text>Tentang</Text>
//         </View>
//         <View
//           style={{
//             flexDirection: 'row',
//             alignItems: 'center',
//             paddingTop: 20,
//             marginLeft: 15,
//           }}>
//           <Image
//             source={{
//               uri:
//                 'https://lh3.googleusercontent.com/a-/AOh14GgjBmMk_7xOy1tbJwWLfrEiina4doYSSCNeU9xJTQ=s88-c-k-c0x00ffffff-no-rj-mo',
//             }}
//             style={{width: 100, height: 100, borderRadius: 50}}
//           />
//           <View style={{paddingLeft: 20}}>
//             <Text style={{fontSize: 20, fontWeight: 'bold'}}>
//               Ulung Priyo Bintoro
//             </Text>
//             <Text>{this.state.subscriber} Subscriber</Text>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

const FlexBox = () => {
  const [subscriber, setSubscriber] = useState(200);

  useEffect(() => {
    console.log('did mount');
    setTimeout(() => {
      setSubscriber(400);
    }, 2000);
    return () => {
      console.log('did update');
    };
  }, [subscriber]);

  // useEffect(() => {
  //   console.log('did update');
  // }, [subscriber]);
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
          <Text>{subscriber} Subscriber</Text>
        </View>
      </View>
    </View>
  );
};

export default FlexBox;
