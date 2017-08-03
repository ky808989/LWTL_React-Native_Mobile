import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    ScrollView,
    AsyncStorage
} from 'react-native';

class Mentor4 extends Component {
    constructor(){
        super();
        this.state = {
            meetDate: '',
            period: '',
            key:{ meetDate_key:'@LWTL:meetDate', meetPeriod_key:'@LWTL2:meetPeriod'}
        }
        this.show();
    }

    show = async () => {
        try{
            let Date = await AsyncStorage.getItem(this.state.key.meetPeriod_key);
            let Period = await AsyncStorage.getItem(this.state.key.meetDate_key);
            this.setState({meetDate: Date});
            this.setState({period: Period});
        }catch(err){
            console.log('aaaaa');
        }
    }
    onPress(page){
        if(page == 'c') {
            this.props.navigator.push({
                id: 'Mentor5'
            });
        }else if(page == 'b'){
            this.props.navigator.push({
                id: 'Mentor2'
            });
        }
        else if(page == 'a') {
            this.props.navigator.push({
                id: 'Mentor3'
            });
        }
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.men407}>
                    <Text style={styles.men408}>
                        CONFIRM COFFEE INVITE
                    </Text>
                </View>

                <View style={styles.men409}>

                    <View>
                        <Text style={styles.men403}>
                            WHEN
                        </Text>
                    </View>

                    <View style={styles.men410}>
                        <View style={styles.men402}>
                            <Text style={styles.men405}>
                                {this.state.meetDate}
                            </Text>
                        </View>
                        <View style={styles.men401}>
                            <TouchableOpacity
                                activeOpacity={.5}
                                onPress={(page)=> this.onPress('b')}
                            >
                                <View style={styles.men414}>
                                    <Text style={styles.men404}>
                                        Edit
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.men406}>
                        <Text style={styles.men403}>
                            HOW LONG
                        </Text>
                    </View>

                    <View style={styles.men410}>
                        <View style={styles.men402}>
                            <Text style={styles.men405}>
                                {this.state.period}
                            </Text>
                        </View>
                        <View style={styles.men401}>
                            <TouchableOpacity
                                activeOpacity={.5}
                                onPress={(page)=> this.onPress('b')}
                            >
                                <View style={styles.men414}>
                                    <Text style={styles.men404}>
                                        Edit
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={styles.men406}>
                        <Text style={styles.men403}>
                            WHERE
                        </Text>
                    </View>

                    <View style={styles.men410}>
                        <View style={styles.men402}>
                            <View>
                              <Text style={styles.men411}>
                                  Starbucks, Harbour Center
                              </Text>
                            </View>
                            <View>
                                <Text style={styles.men412}>
                                    Lower Mall, 555 West Hastings St. {"\n"}Vancouver, BC, V6B 4J8
                                </Text>
                            </View>

                        </View>
                        <View style={styles.men401}>
                            <TouchableOpacity
                                activeOpacity={.5}
                                onPress={(page)=> this.onPress('a')}
                            >
                                <View style={styles.men413}>
                                    <Text style={styles.men404}>
                                        Edit
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.men415}>
                    <Text style={styles.men416}>
                        When you click "Okay, Let's Do it", as a mentor, you can change your mind if something comes up.
                        {"\n"}
                        {"\n"}
                        Elletourage knows that mentors can be busy and that plans change.
                    </Text>
                </View>

                <View style={styles.men417}>
                    <TouchableOpacity
                        activeOpacity={.5}
                        onPress={(page)=> this.onPress('c')}
                    >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                Okay, Let's Do It!
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
        men401:{
            flex:1
        },
        men402:{
            flex:4
        },
        men403:{
            fontSize: 15,
            color: 'grey'
        },
        men404:{
            color:'grey',
            fontSize:18
        },
        men405:{
            fontSize: 25,
            color: 'black'
        },
        men406:{
            marginTop: 20
        },
        men407:{
            marginTop: 25,
            paddingTop: 20,
            alignItems: 'center',
            height:70,
            backgroundColor: '#3a3c3f'
        },
        men408:{
            fontSize: 20,
            color: 'white'
        },
        men409:{
            marginTop:40,
            marginLeft: 30
        },
        men410:{
            flexDirection:'row'
        },
        men411:{
            fontSize: 20,
            color: 'black'
        },
        men412:{
            fontSize: 17,
            color: 'black'
        },
        men413:{
            paddingBottom:45
        },
        men414:{
            paddingTop:4
        },
        men415:{
            marginTop:40,
            marginHorizontal: 20,
            backgroundColor: 'hsla(0, 0%, 0%, 0.1)'
        },
        men416:{
            fontSize: 18,
            color: 'black',
            padding: 15
        },
        men417:{
            backgroundColor: 'white',
            padding: 20,
            paddingTop:40
        }
    }
);

module.exports = Mentor4;
