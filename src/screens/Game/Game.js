import React from 'react';
import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  BackHandler,
  Alert,
  ScrollView,
  StatusBar,
  Image,
  Platform,
  ActivityIndicator,
  ImageBackground,
  Button,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AnimatedDeck, PlayerMenu, PlayerHand, GameArea } from '../../components';
import * as Actions from '../../redux/actions/GameActions';
import styles from './styles';
import StatusBarTop from '../../components/StatusBarTop';


class Game extends React.Component {

  constructor(props){
    super(props)
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  componentDidMount(){
  
  }

  componentDidUpdate(){
   
  }

  UNSAFE_componentWillMount(){
     BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick)
  }

  componentWillUnmount(){
     BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick)
  }

  handleBackButtonClick(){
      console.log('Backhandler called');
      Alert.alert(
          'Exit App',
          'Do you want to exit this application?',
          [
              {
                  text: 'No',
                  onPress: () => console.log('No Pressed'),
                  style: 'cancel',
              },
              {
                  text: 'Yes',
                  onPress: () => BackHandler.exitApp(),
              },
          ],
          {
              cancelable: false,
          },
      );
      return true;
  }


  render() {
    return (
      <ImageBackground
        source={require('./../../assets/images/img_backgroundprimary.jpeg')}
        style={{ flex: 1 }}>
        <StatusBarTop/>
        <View style={styles.gameContainer}>
          <View style={this.getStyle()}>
            {!this.props.gameStart ? <AnimatedDeck /> : <GameArea />}
          </View>
          <PlayerHand />
        </View>
        {this.props.gameStart ? <PlayerMenu /> : null}
      </ImageBackground>
    );
  }

  getStyle() {
    console.log('Style props is : ' + this.props.gameStart);
    return [styles.gameArea, this.props.gameStart ? styles.gameStart : styles.gameNotStart];
  }

}

function mapStateToProps(state) {
  return {
    gameStart: state.GameReducer.gameStart,
    myTurn: state.GameReducer.myTurn,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
