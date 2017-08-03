import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    ScrollView,
    TouchableOpacity
} from 'react-native';

class Mentor5 extends Component {

    onPress(){
        this.props.navigator.push({
            id:'Mentor6',

        });
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.men501}>
                    <Text style={styles.men502}>
                        WAITING FOR A RESPONSE
                    </Text>
                </View>

                <View style={styles.men503}>
                    <View>
                        <Text style={styles.men504}>
                            What happens next?
                        </Text>

                    </View >
                    <View style={styles.men505}>
                        <Text style={styles.men506}>
                            You will receive a notification on your phone when a member want to accept your invitation.
                            {"\n"}
                            {"\n"}
                            You do not need to keep this app open to receive the notification.
                            {"\n"}
                            {"\n"}
                            You will have the opportunity to confirm the appointment when you read the notification.
                        </Text>
                    </View>
                </View>

                <View style={styles.men507}>
                    <TouchableOpacity
                        activeOpacity={.5}
                        onPress={()=> {this.onPress()}}
                    >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                Confirmed Already?
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
            backgroundColor: 'white'
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
        men501:{
            marginTop: 25,
            paddingTop: 20,
            alignItems: 'center',
            height:70,
            backgroundColor: '#3a3c3f'
        },
        men502:{
            fontSize: 20,
            color: 'white'
        },
        men503:{
            marginTop: 40,
            paddingHorizontal: 30
        },
        men504:{
            fontSize: 30
        },
        men505:{
            marginTop: 40
        },
        men506:{
            fontSize: 20
        },
        men507:{
            marginTop: 105,
            backgroundColor: 'white',
            padding: 20,
            paddingTop:40
        }
    }
);

module.exports = Mentor5;
