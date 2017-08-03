/**
 * Created by Flyboring on 2017-05-11.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native'


class First extends Component {

    onPress(page){
        if(page == 'a') {
            this.props.navigator.push({
                id: 'PickerTime'
            });
        }else{
            this.props.navigator.push({
                id: 'Geolocation'
            });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.largeText}>
                    I'm York Liu, I'm trying to response TimeSelection Page !
                </Text>

                <TouchableHighlight
                    style={styles.button}
                    onPress={()=> {this.onPress('a')}}
                >
                    <Text style={styles.buttonText}> Want Go Back ? </Text>
                </TouchableHighlight>
                <Text style={styles.largeText}>
                    I'm York Liu, I'm trying to response Geolocation !
                </Text>

                <TouchableHighlight
                    style={styles.button}
                    onPress={()=> {this.onPress()}}
                >
                    <Text style={styles.buttonText}> Want Go Back ? </Text>
                </TouchableHighlight>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dddfd4',
    },
    largeText: {
        flex: 1,
        fontSize: 30,

        paddingTop: 40,
        paddingRight: 20,
        paddingLeft: 20,
        color: '#173e43',
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#3fb0ac'
    },
    buttonText: {
        //fontFamily:'HelveticaNeue-CondensedBold',
        color: '#fae596'

    }
});

module.exports = First;
