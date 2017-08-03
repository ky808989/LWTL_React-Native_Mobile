import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    ScrollView,
    TouchableOpacity
} from 'react-native';


import CheckBox from 'react-native-checkbox';

class Reg2 extends Component {

    onPress(){
        this.props.navigator.push({
            id:'Reg3',

        });
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.reg21}>
                    <Text style={styles.reg22}>
                        What would you like to mentor on?
                    </Text>
                </View>

                <View>
                    <Text style={styles.reg23}>
                        Check all that apply
                    </Text>
                </View>

                <View style={styles.reg24}>

                    <View style={styles.inputWrap}>
                        <CheckBox
                            label="Business"
                            checked={false}
                            onChange={(checked) => console.log('I am checked', checked)}
                        />
                    </View>

                    <View style={styles.inputWrap}>
                        <CheckBox
                            label="Personal"
                            checked={false}
                            onChange={(checked) => console.log('I am checked', checked)}
                        />
                    </View>

                    <View style={styles.inputWrap}>
                        <CheckBox
                            label="Living a healthier life"
                            checked={false}
                            onChange={(checked) => console.log('I am checked', checked)}
                        />
                    </View>

                    <View style={styles.inputWrap}>
                        <CheckBox
                            label="Living your life to the fullest"
                            checked={false}
                            onChange={(checked) => console.log('I am checked', checked)}
                        />
                    </View>

                    <View style={styles.inputWrap}>
                        <CheckBox
                            label="Getting over anxiety or depression"
                            checked={false}
                            onChange={(checked) => console.log('I am checked', checked)}
                        />
                    </View>

                    <View style={styles.inputWrap}>
                        <CheckBox
                            label="Family"
                            checked={false}
                            onChange={(checked) => console.log('I am checked', checked)}
                        />
                    </View>
                </View>

                <View style={styles.reg25}>
                    <TouchableOpacity
                        activeOpacity={.5}
                        onPress={()=> {this.onPress()}}
                    >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                Next      >
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor:'white'

        },
        inputWrap: {
            height: 60,
            backgroundColor: "transparent",
            borderWidth: 1,
            borderColor: '#B0AFAF',
            paddingHorizontal: 26,
            paddingVertical: 15
        },
        button: {
            backgroundColor: "#4cb712",
            alignItems: "center",
            justifyContent: "center",
            padding: 10
        },
        buttonText: {
            color: "#FFF",
            fontSize: 30,
        },
        reg21: {
            paddingTop: 30,
            paddingLeft: 25,
            height:100
        },
        reg22: {
            fontSize: 30
        },
        reg23: {
            marginTop: 30,
            paddingLeft:25,
            fontSize: 20,
            color: '#989891'
        },
        reg24: {
            justifyContent: 'center',
            marginTop: 20
        },
        reg25: {
            backgroundColor: 'white',
            padding: 20,
            paddingTop: 40
        }
    }
);

module.exports = Reg2;
