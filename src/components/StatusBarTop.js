import React from 'react';
import { StyleSheet, View, Platform, StatusBar } from 'react-native';

export default class StatusBarTop extends React.Component {
  render() {
    return (
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#4285F4"
        translucent={true}
      />
    );
  }
}


/*const StatusBarTop = () => {
    return (
        <>
          <View>
             <StatusBar
                barStyle="light-content"
                hidden={false}
                backgroundColor="#4285F4"
                translucent={true}
             />
          </View>
        </>
    );  
};

export default StatusBarTop;*/

