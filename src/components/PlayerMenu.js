import React from 'react';
import { View } from 'react-native';
import PlayerMenuButton from './PlayerMenuButton';

export default class PlayerMenu extends React.Component {

  constructor(props) {
    super(props);
    console.log('Props value in PlayerMenu is : ' +  props);
  }

  render() {
    return (
      <View style={MenuStyle.container}>
        <PlayerMenuButton text="Request Card" />
        <PlayerMenuButton text="Pass" />
        <PlayerMenuButton text="Pop" />
        <PlayerMenuButton text="Open Hand" />
      </View>
    );
  }
}

const MenuStyle = {
  container: {
    position: 'absolute',
    bottom: 0,
    height: 80,
    left: 0,
    right: 0,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(55, 55, 55, 0.2)',
  },
};

/*
 <PlayerMenuButton text="Request Card" icon="ios-arrow-dropup-outline" />
 <PlayerMenuButton text="Pass" icon="ios-close-circle-outline" />
 <PlayerMenuButton text="Open Hand" icon="ios-apps-outline" />
 <PlayerMenuButton text="Settings" icon="md-settings" />
*/



