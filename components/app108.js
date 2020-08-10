import React from 'react';
import { View, Text } from 'react-native';

const IOS = () => {
  return(
    
    <View style={{
     flexDirection:'row',
     height:100,
     width:200,
      
    }}>
      <View style={{
        backgroundColor:'red',
        flex:0.5,
        }}>
      <Text style={{
        color:'yellow',
        textAlign:'center',
        }}>IU</Text>
      </View>
      <View style={{
        backgroundColor: 'pink',
        flex:0.9,
      }}>
        <Text style={{
          color:'black',
          textAlign:'center',
        }}>IU</Text>
      </View>  
    </View>
  )
}
export default IOS;