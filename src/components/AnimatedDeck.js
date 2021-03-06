import React from 'react';
import { View, Animated, TouchableOpacity, Image } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from '../screens/Game/styles';
import * as Actions from '../redux/actions/GameActions';

const Sound = require('react-native-sound');

var dealSound = new Sound('deal.wav', Sound.MAIN_BUNDLE, error => {
  if (error) {
    return;
  }
});

class AnimatedDeck extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      top: new Animated.Value(-175 / 2),
    };
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <Image resizeMode="stretch" source={require('../assets/images/card/back.png')} style={styles.card} />
        <View>
          <Animated.View style={{ position: 'absolute', left: -100, top: this.state.top,}}>
            <TouchableOpacity onPress={() => { this.shuffle(); }}>
              <Image resizeMode="stretch" source={require('../assets/images/card/back.png')} style={[styles.card, {}]} />
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    );
  }

  shuffle() {
    console.log('Shuffle clicked')
    this.props.dealCards();
    dealSound.setNumberOfLoops(-1);
    dealSound.play(success => {
      if (!success) {
        dealSound.reset();
      }
    });
    this.playAnimation();
  }

  playAnimation() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.top, {
          toValue: -900,
          duration: 200,
          delay: 20,
        }),
        Animated.timing(this.state.top, {
          toValue: -175 / 2,
          duration: 1,
          delay: 1,
        }),
        Animated.timing(this.state.top, {
          toValue: 900,
          duration: 200,
          delay: 20,
        }),
      ]),
      {
        iterations: 3,
      }
    ).start(() => {
      console.log('Start game now')
      dealSound.stop();
      this.props.startGame();
    });
  }
}

function mapStateToProps(state) {
  return {
    gameStart: state.GameReducer.gameStart,
    gameStarting: state.GameReducer.gameStarting,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimatedDeck);
