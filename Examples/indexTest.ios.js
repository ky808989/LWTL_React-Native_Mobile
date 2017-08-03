/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
} from 'react-native';

import {
    Navigator
} from 'react-native-deprecated-custom-components';

var Login = require ('./LoginAndre');
var First = require ('./First');
var PickerTime = require ('./PickerTime');
var MentorPa = require ('./../testC/MentorPa');
var MentorPb = require ('./../testC/MentorPb');
var MentorPc = require ('./../testC/MentorPc');
var MentorPd = require ('./../testC/MentorPd');
var MentorPe = require ('./../testC/MentorPe');
var MentorPf = require ('./../testC/MentorPf');
var MentorPg = require ('./../testC/MentorPg');
var MentorPh = require ('./../testC/MentorPh');
var MentorPi = require ('./../testC/MentorPi');
var MentorPj = require ('./../testC/MentorPj');
var MentorPk = require ('./../testC/MentorPk');
var MentorPl = require ('./../testC/MentorPl');
var MentorPm = require ('./MentorPm');


class LWTL extends Component{
    render(){
        return (
            <Navigator
                initialRoute = {{
         id: 'Login'
       }}
                renderScene={
         this.navigatorRenderScene
       }
            />
        );
    }
    navigatorRenderScene (route, navigator) {
        _navigator = navigator;
        switch (route.id) {
            case 'Login':
                return(<Login navigator={navigator} title="Login" />);
            case 'First':
                return(<First navigator={navigator} title="First" />);
            case 'PickerTime':
                return(<PickerTime navigator={navigator} title="PickerTime" />);
            case 'MentorPa':
                return(<MentorPa navigator={navigator} title="MentorPa" />);
            case 'MentorPb':
                return(<MentorPb navigator={navigator} title="MentorPb" />);
            case 'MentorPc':
                return(<MentorPc navigator={navigator} title="MentorPc" />);
            case 'MentorPd':
                return(<MentorPd navigator={navigator} title="MentorPd" />);
            case 'MentorPe':
                return(<MentorPe navigator={navigator} title="MentorPe" />);
            case 'MentorPf':
                return(<MentorPf navigator={navigator} title="MentorPf" />);
            case 'MentorPg':
                return(<MentorPg navigator={navigator} title="MentorPg" />);
            case 'MentorPh':
                return(<MentorPh navigator={navigator} title="MentorPh" />);
            case 'MentorPi':
                return(<MentorPi navigator={navigator} title="MentorPi" />);
            case 'MentorPj':
                return(<MentorPj navigator={navigator} title="MentorPj" />);
            case 'MentorPk':
                return(<MentorPk navigator={navigator} title="MentorPk" />);
            case 'MentorPl':
                return(<MentorPl navigator={navigator} title="MentorPl" />);
            case 'MentorPm':
                return(<MentorPm navigator={navigator} title="MentorPm" />);
        }
    }
}
AppRegistry.registerComponent('LWTL', () => LWTL);
