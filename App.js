import React from 'react';
import { View, Text , Image} from 'react-native';
class Ios extends React.Component{
    constructor(props){
      super(props);
        this.state={
            youtube:'YOUTUBE 🎧',
            facebook:'FACEBOOK 🔥',
        }
    }
    render(){
      return(
        <View style={{
          flex: 1,
          justifyContent:'center',
        }}>

            <Text style={{
              fontSize: 30,
              fontWeight: 'bold',
              color:'red',
              textAlign:'left',
              marginTop:8,
            }}>{this.state.youtube}</Text>


            <View style={{
            flex:1,
            justifyContent: 'center',
            }}>

                <Text style={{
                   fontSize: 30,
                   fontWeight: 'bold',
                   color:'blue',
                   textAlign:'center',
                }}>{this.state.facebook}</Text>
                
          </View>
        </View>
      )  
    }
}
export default Ios;