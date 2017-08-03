/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AsyncStorage,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    AlertIOS,
    Form} from 'react-native';

import{Content,Card,CardItem,Body} from 'native-base';
import AppBodyData from './AppBodyData';

const STORAGE_KEY = '@LWTL:id_token';
const STORAGE_KEY2 = '@LWTL:recommendations';
const options = {};


export default class AppBody extends Component{

    constructor(props)
    {
        super(props);
        this.state ={
            data: {},
        }
    };

    _onValueChange=async(item, selectedValue)=> {
        try {
            await AsyncStorage.setItem(item, selectedValue);
        } catch (error) {

        }
    };
    _userLogin()
    {
        return fetch("https://staging.elletourage.com/api/v1/sessions", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: 'andreliem',
                password: 'andreliem',
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {

                AlertIOS.alert(
                    "Login Success!",
                    JSON.stringify(responseJson.token)
                ),
                    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(responseJson.token));


            })
            .catch((error) => {
                console.error(error);
            });
    };



    async _userLogout() {
        try {
            await AsyncStorage.removeItem(STORAGE_KEY);
            AlertIOS.alert("Logout Success!")
        } catch (error) {
            console.log('AsyncStorage error: ' + error.message);
        }
    };
    async _getProtectedQuote() {
        var DEMO_TOKEN = await AsyncStorage.getItem(STORAGE_KEY);

        fetch("https://staging.elletourage.com/api/v1/member_recommendations", {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + DEMO_TOKEN
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {

                AsyncStorage.setItem(STORAGE_KEY2, JSON.stringify(responseJson));
                AlertIOS.alert("Chuck Norris Quote:", JSON.stringify(responseJson));

            })
            .catch((error) => {
                console.error(error);
            });


    };
    async _getRecommendations()
    {
        this._getProtectedQuote;
        var resp = await AsyncStorage.getItem(STORAGE_KEY2);
        var object = JSON.parse(resp);
        AlertIOS.alert("RecommendationsData",object.recommendations[1].user.profile.first_name+" "+object.recommendations[1].user.profile.last_name);

    }
    componentDidMount(){

    };
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <Text style={styles.title}>Signup/Login below for Chuck Norris Quotes!</Text>
                </View>

                <View style={styles.row}>

                    <TouchableHighlight style={styles.button} onPress={this._userLogin} underlayColor='#99d9f4'>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.button} onPress={this._userLogout} underlayColor='#99d9f4'>
                        <Text style={styles.buttonText}>Logout</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.row}>
                    <TouchableHighlight onPress={this._getRecommendations} style={styles.button}>
                        <Text style={styles.buttonText}>Get a Chuck Norris Quote!</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    };

}
const styles = StyleSheet.create({
    bodyText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        color:'blue',
        fontSize: 40,
    },

});
module.exports = AppBody;
