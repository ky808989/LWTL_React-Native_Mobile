
import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';


import CheckBox from 'react-native-checkbox';




class MentorPc extends Component {

    onPress(){
        this.props.navigator.push({
            id:'MentorPd',

        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{
                    paddingTop: 30,
                    paddingLeft: 25,
                    height:100,
                   }}
                >
                    <Text style={{fontSize: 30}}>What would you like to mentor on?</Text>
                </View>


                <View>
                    <Text style={{
                        marginTop: 30,
                        paddingLeft:25,
                        fontSize: 20,
                        color: '#989891'}}
                    >
                        Check all that apply
                    </Text>
                </View>

                <View style={{justifyContent: 'center', marginTop: 20}}>

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
                        <TextInput
                            placeholder="Family"
                            style={styles.input2}
                            underlineColorAndroid="transparent"
                        />
                    </View>
                </View>

                <View style={{backgroundColor: 'white', padding: 20, paddingTop: 40}}>
                    <TouchableOpacity
                        activeOpacity={.5}
                        onPress={()=> {this.onPress()}}
                    >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Next      ></Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
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
            //flexDirection: "row",
            height: 60,
            backgroundColor: "transparent",
            borderTopWidth: 1,
            borderColor: '#B0AFAF',
            paddingHorizontal: 26,
            paddingVertical: 15
        },
        input: {
            flex: 1,
            paddingHorizontal: 10,
            backgroundColor: '#FFF',
            fontSize: 20
        },
        input2: {
            flex: 1,
            backgroundColor: '#FFF',
            fontSize: 24,
            paddingHorizontal: 20,
            alignItems: "center",
            justifyContent: "center"
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
    }
);


module.exports = MentorPc;
