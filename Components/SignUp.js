import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    ScrollView,
    TextInput,
    TouchableOpacity
} from 'react-native';

class SignUp extends Component {

    onPress(){
        this.props.navigator.push({
            id:'Login',

        });
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.sign1}>
                    <Text style={styles.sign2}>
                        Register
                    </Text>
                </View>

                <View style={styles.sign3}>
                    <View style={styles.inputWrap}>
                        <TextInput
                            placeholder="username"
                            style={styles.input2}
                            underlineColorAndroid="transparent"
                        />
                    </View>

                    <View style={styles.inputWrap}>
                        <TextInput
                            placeholder="email address"
                            style={styles.input2}
                            underlineColorAndroid="transparent"
                        />
                    </View>

                    <View style={styles.inputWrap}>
                        <TextInput
                            placeholder="password"
                            style={styles.input2}
                            underlineColorAndroid="transparent"
                        />
                    </View>


                </View>

                <View style={styles.sign4}>
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
        sign1: {
            paddingTop: 30,
            paddingLeft: 25,
            height:200,
            backgroundColor: '#393c3b'
        },
        sign2: {
            fontSize: 40,
            color: 'white'
        },
        sign3: {
            justifyContent: 'center'
        },
        sign4: {
            backgroundColor: '#393c3b',
            padding: 20,
            paddingTop: 80
        },


    }
);

module.exports = SignUp;

