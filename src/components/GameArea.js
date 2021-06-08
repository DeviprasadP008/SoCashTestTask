import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import GameStatusBar from './GameStatusBar';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from '../screens/Game/styles';
import * as Actions from '../redux/actions/GameActions';

class GameArea extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View style={{flex: 1}}>
         <GameStatusBar />
         <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          {this.props.deck.length > 0 ? (
            <TouchableOpacity onPress={() => { this.props.cardRequest(); }}>
              <Image resizeMode="stretch" source={require('../assets/images/card/back.png')} style={[styles.card]} />
            </TouchableOpacity>
          ) : null}
          {this.props.openDeck.length > 0 ? (
            <TouchableOpacity onPress={() => { this.props.addMyDeck(); }}>
              <Image resizeMode="stretch" source={ this.props.openDeck[this.props.openDeck.length - 1].image} style={[styles.card]} />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    openDeck: state.GameReducer.openDeck,
    deck: state.GameReducer.deck,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GameArea);
