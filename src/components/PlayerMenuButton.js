import React from 'react';
import { TouchableOpacity, Text, View, Platform, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Card } from 'react-native-paper';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../redux/actions/GameActions';


class PlayerMenu extends React.Component {

  constructor(props) {
    super(props);
    console.log('Props value in PlayerMenuButton is : ' + this.props.text);
    console.log('Props length card : ' + this.props.handDeck.length);
  }

  render() {
    return (
      <View>
         <Card 
            style={{  
              width: '100%',
              height: 60,
              width: 80,
              borderRadius: 10,
              backgroundColor: '#4285F4',
              marginLeft: 10,
              marginRight: 10,
              marginTop: 20,
              shadowColor: '#4285F4',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              ...Platform.select({
                  ios: {
                      shadowRadius: 1,
                      elevation: 2,
                  },
                  android: {
                      shadowRadius: 2,
                      elevation: 4,
                  },
              }),}}>
           <View style={{ flex: 1, width: '100%', height: '100%', flexDirection: 'column', alignItems: 'center'}}>
            <TouchableOpacity
                onPress={() => { this.props.text === "Request Card" ? this.props.cardRequest() : this.props.text === "Pass" ? this.props.cardPass() : this.props.text === "Pop" ? (this.props.handDeck.length > 3 ?  this.props.cardPop() : this.displayerroralert()) : this.props.text === "Open Hand" ? this.props.openHand() : null }}
                disabled={this.props.disabled}
                style={{ flex: 1, width: '100%', height: '100%'}}>
                <View style={{ flex: 1, width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 2,}}>
                  <Text style={{ color: '#fff', padding: 2, textAlign: 'center' }}>{this.props.text}</Text>                                  
                </View>
              </TouchableOpacity>
           </View>
         </Card>
      </View>
    );
  }

  displayerroralert(){
    Alert.alert(
        'Minimum Cards',
        'You have reached below minimum level',
        [
            {
                text: 'Ok',
                onPress: () => console.log('No Pressed'),
            },
        ],
        {
            cancelable: false,
        },
    );
    return true;
  }


 
}



function mapStateToProps(state) {
  return {
    openDeck: state.GameReducer.openDeck,
    deck: state.GameReducer.deck,
    handDeck: state.GameReducer.playerHand,
    myTurn: state.GameReducer.myTurn,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerMenu);

// onPress={() => { this.props.cardRequest(); }}
// onPress={ this.props.text === "Request Card" ? this.props.cardRequest() :  this.props.text === "Pass" ? this.props.cardPass() : this.props.text === "Open Hand" ? this.props.openHand() : null }

   /*
        backgroundColor: '#56A5EC',
                  padding: 5,
                  borderRadius: 5,
                  width: 80,
                  height: 60,
                  marginTop: 20,
  <Icon color={'white'} name={this.props.icon} size={30} />

      */