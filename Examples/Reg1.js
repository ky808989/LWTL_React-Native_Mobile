import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    AsyncStorage,
    AlertIOS
} from 'react-native';


class MentorPb extends Component {
    constructor()
    {
        super();
        this.state ={


                firstName:'',
                lastName:'',
                telephone:'',
                city:'',
                province:'',

            key:{MI_KEY:'@LWTL:mentorInfo'}
        }

    };


    storageData()  {


         AsyncStorage.setItem(this.state.key.MI_KEY,JSON.stringify(this.state));

    }
    onPress(){

        this.storageData();
        AlertIOS.alert(this.state.firstName);

    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{
                    paddingTop: 30,
                    paddingLeft: 25,
                    height:200,
                    backgroundColor: '#393c3b'}}
                >
                    <Text style={{fontSize: 40, color: 'white'}}>Be a Mentor</Text>
                </View>

                <View style={{justifyContent: 'center'}}>
                    <View style={styles.inputWrap}>
                        <TextInput
                            placeholder="first name"
                            style={styles.input2}
                            underlineColorAndroid="transparent"
                            onChangeText={(text) => this.setState({'firstName': text})}
                        />
                    </View>

                    <View style={styles.inputWrap}>
                        <TextInput
                            placeholder="last name"
                            style={styles.input2}
                            underlineColorAndroid="transparent"
                         //   onChangeText={(text) => this.setState({mentorInfo:{'lastName': text}})}
                        />
                    </View>

                    <View style={styles.inputWrap}>
                        <TextInput
                            placeholder="telephone"
                            style={styles.input2}
                            underlineColorAndroid="transparent"
                         //   onChangeText={(text) => this.setState({mentorInfo:{'telephone': text}})}
                        />
                    </View>

                    <View style={styles.inputWrap}>
                        <TextInput
                            placeholder="city"
                            style={styles.input2}
                            underlineColorAndroid="transparent"
                           // onChangeText={(text) => this.setState({mentorInfo:{'city': text}})}
                        />
                    </View>

                    <View style={styles.inputWrap}>
                        <TextInput
                            placeholder="province"
                            style={styles.input2}
                            underlineColorAndroid="transparent"
                          //  onChangeText={(text) => this.setState({mentorInfo:{'province': text}})}
                        />
                    </View>
                </View>

                <View style={{backgroundColor: '#393c3b', padding: 20, paddingTop: 80}}>
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
            backgroundColor: '#393c3b'
        },
        inputWrap: {
            //flexDirection: "row",
            height: 60,
            backgroundColor: "transparent",
            borderTopWidth: 1,
            borderColor: '#B0AFAF'
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
    }
);


module.exports = MentorPb;
