import React, { Component } from 'react';
import {
    AppRegistry,
} from 'react-native';

import {
    Navigator
} from 'react-native-deprecated-custom-components';

var Login = require ('./Components/Login');
var SignUp = require ('./Components/SignUp');
var MenuP = require ('./Components/MenuP');
var Reg1 = require ('./Components/Reg1');
var Reg2 = require ('./Components/Reg2');
var Reg3 = require ('./Components/Reg3');
var Mentor1 = require ('./Components/Mentor1');
var Mentor2 = require ('./Components/Mentor2');
var Mentor3 = require ('./Components/Mentor3');
var Mentor4 = require ('./Components/Mentor4');
var Mentor5 = require ('./Components/Mentor5');
var Mentor6 = require ('./Components/Mentor6');
var Member1 = require ('./Components/Member1');
var Member2 = require ('./Components/Member2');
var Member3 = require ('./Components/Member3');
var Member4 = require ('./Components/Member4');
var styles = require ('./Components/styles');


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
            case 'Mentor2':
                return(<Mentor2 navigator={navigator} title="Mentor2" />);
            case 'MenuP':
                return(<MenuP navigator={navigator} title="MenuP" />);
            case 'Reg1':
                return(<Reg1 navigator={navigator} title="Reg1" />);
            case 'Reg2':
                return(<Reg2 navigator={navigator} title="Reg2" />);
            case 'Reg3':
                return(<Reg3 navigator={navigator} title="Reg3" />);
            case 'Mentor1':
                return(<Mentor1 navigator={navigator} title="Mentor1" />);
            case 'Mentor4':
                return(<Mentor4 navigator={navigator} title="Mentor4" />);
            case 'Mentor5':
                return(<Mentor5 navigator={navigator} title="Mentor5" />);
            case 'Mentor6':
                return(<Mentor6 navigator={navigator} title="Mentor6" />);
            case 'Member1':
                return(<Member1 navigator={navigator} title="Member1" />);
            case 'Member2':
                return(<Member2 navigator={navigator} title="Member2" />);
            case 'Member3':
                return(<Member3 navigator={navigator} title="Member3" />);
            case 'Member4':
                return(<Member4 navigator={navigator} title="Member4" />);
            case 'Mentor3':
                return(<Mentor3 navigator={navigator} title="Mentor3" />);
            case 'SignUp':
                return(<SignUp navigator={navigator} title="SignUp" />);
            case 'styles':
                return(<styles navigator={navigator} title="styles" />);
        }
    }
}

AppRegistry.registerComponent('LWTL', () => LWTL);
