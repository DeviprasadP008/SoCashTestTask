import React, { useState, useEffect, useRef } from 'react';
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
import { useFocusEffect } from '@react-navigation/native';
import styles from './styles';
import StatusBarTop from '../../components/StatusBarTop';
import Game from '../Game/Game';


export default class Home extends React.Component {

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
            <View style={styles.parent}>
                <StatusBarTop/>
                <Game/>
            </View>
        );
      }
}



/*
const Home = ({ navigation }) => {

    useFocusEffect(
        React.useCallback(() => {
          
        }, []),
    );

    useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );
        return () => backHandler.remove();
    }, []);

    const backAction = () => {
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
    };


    return (
        <>
            <View style={styles.parent}>
              <StatusBarTop/>
              <Game/>
            </View>
        </>
    );


};


export default Home;
*/
