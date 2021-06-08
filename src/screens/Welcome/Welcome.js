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
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import styles from './styles';
import StatusBarTop from '../../components/StatusBarTop';


export default class Welcome extends React.Component {

    constructor(props){
      super(props)
      this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }

    componentDidMount(){
        const {navigate} = this.props.navigation;
        setTimeout(function(){navigate('Home')}, 3000);
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
            </View>
        );
      }
}




/*const Welcome = ({ navigation }) => {

    useFocusEffect(
        React.useCallback(() => {
          setTimeout(() => navigation.navigate('Home'), 3000)
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
            </View>
        </>
    );


}

export default Welcome;*/
