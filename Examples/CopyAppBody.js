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
    AlertIOS, } from 'react-native';


var STORAGE_KEY = '@LWTL:id_token';

export default class AppBody extends Component{

    constructor()
    {
        super()
        this.state ={
            data: [],
        }
    }

    _onValueChange=async(item, selectedValue)=> {
        try {
            await AsyncStorage.setItem(item, selectedValue);
        } catch (error) {

        }
    }
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
                    responseJson.token
                ),
                this._onValueChange(STORAGE_KEY, responseJson.token)


            })
            .catch((error) => {
                console.error(error);
            });
    }

    componentDidMount(){
        this._userLogin();
    }

    render(){
        return (
            <TouchableHighlight style={styles.button} onPress={this._userLogin} underlayColor='#99d9f4'>
                <Text style={styles.buttonText}>Login</Text>

            </TouchableHighlight>
        );
    }

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
