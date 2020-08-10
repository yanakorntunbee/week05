import React from 'react';
import {View,Text} from 'react-native';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={

        message: 'hello hi',
        bp: 'How you like that',
    }

  }
    render(){
      return(
        <View>
          <Text>{this.state.message}</Text>
          <Text>{this.state.bp}</Text>
        </View>
      )
    }
}
export default App;