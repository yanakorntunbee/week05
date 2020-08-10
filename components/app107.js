import React from 'react';
import {View,Text} from 'react-native';


const App = () => {
  return(
    <View style={{
      flexDirection:"row",
      width:100,
      height:100,
    }}>
      <View style={{
        backgroundColor:"red",
        flex:5,
      }}>
      <Text style={{
        color:"black",
        textAlign:"center",
      }}>IU</Text>
       </View>

      <View style={{
        backgroundColor:"pink",
        flex:100,       
      }}>
        <Text style={{
          color:"black",
          textAlign:"center",  
        }}></Text>
        
        </View>
    </View>
  )
}
export default App;