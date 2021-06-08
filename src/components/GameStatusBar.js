import React from 'react';
import { View, Text } from 'react-native';

class GameStatusBar extends React.Component {
  render() {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, marginLeft: 20, marginRight: 20 }}>
        <View> 
          <Text></Text>
        </View>
        <View> 
           <Text style={{ fontSize: 16, color: '#fff', marginTop: 10 }}>vs Player 2</Text>
         </View>
         <View> 
           <Text></Text>
         </View>
      </View>
    );
  }
}

export default GameStatusBar; 


/*
import Icon from 'react-native-vector-icons/Ionicons';

          <Icon.Button
            name="ios-flash-outline"
            size={18}
            color="#fff"
            backgroundColor="#331919">
            1 / 6
          </Icon.Button>

           <Icon.Button
            name="logo-usd"
            size={18}
            color="#fff"
            backgroundColor="#331919">
            5000
          </Icon.Button>
*/
