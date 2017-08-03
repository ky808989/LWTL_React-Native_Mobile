import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    ScrollView,
    TextInput,
    TouchableOpacity
} from 'react-native';

class Reg1 extends Component {

    onPress(){
        this.props.navigator.push({
            id:'Reg2',

        });
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.reg11}>
                    <Text style={styles.reg12}>
                        Be a Mentor
                    </Text>
                </View>

                <View style={styles.reg13}>
                    <View style={styles.inputWrap}>
                        <TextInput
                            placeholder="first name"
                            style={styles.input2}
                            underlineColorAndroid="transparent"
                        />
                    </View>

                    <View style={styles.inputWrap}>
                        <TextInput
                            placeholder="last name"
                            style={styles.input2}
                            underlineColorAndroid="transparent"
                        />
                    </View>

                    <View style={styles.inputWrap}>
                        <TextInput
                            placeholder="telephone"
                            style={styles.input2}
                            underlineColorAndroid="transparent"
                        />
                    </View>

                    <View style={styles.inputWrap}>
                        <TextInput
                            placeholder="city"
                            style={styles.input2}
                            underlineColorAndroid="transparent"
                        />
                    </View>

                    <View style={styles.inputWrap}>
                        <TextInput
                            placeholder="province"
                            style={styles.input2}
                            underlineColorAndroid="transparent"
                        />
                    </View>
                </View>

                <View style={styles.reg14}>
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
            backgroundColor: '#393c3b'
        },
        inputWrap: {
            height: 60,
            backgroundColor: "transparent",
            borderTopWidth: 1,
            borderColor: '#B0AFAF'
        },
        input2: {
            flex: 1,
            backgroundColor: '#FFF',
            fontSize: 24,
            paddingHorizontal: 20
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
        reg11: {
            paddingTop: 30,
            paddingLeft: 25,
            height:200,
            backgroundColor: '#393c3b'
        },
        reg12: {
            fontSize: 40,
            color: 'white'
        },
        reg13: {
            justifyContent: 'center'
        },
        reg14: {
            backgroundColor: '#393c3b',
            padding: 20,
            paddingTop: 80
        },
    }
);

module.exports = Reg1;
