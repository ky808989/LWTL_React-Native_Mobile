import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    AsyncStorage,
    AlertIOS,
} from 'react-native';





class MentorPd extends Component {

    constructor()
    {
        super();
        this.state ={
            mentorInfo:{firstName:'' ,lastName:'',telephone:'',city:'',province:''},

            key:{MI_KEY:'@LWTL:mentorInfo'}
        }

    };


    getMIData = async () => {

        try {
            var resp = await AsyncStorage.getItem(this.state.key.MI_KEY);
            if (resp !== null) {

                var object = JSON.parse(resp);

                this.setState({apiObject: object});
                // console.log(this.state.apiObject);
                 AlertIOS.alert(JSON.stringify(object));
            }
            else
            {
                AlertIOS.alert('null');
                this.setState({'string': 'failed'});
            }
        } catch(error)
        {
            AlertIOS.alert('error');
            this.setState({'string': 'error'});
        }

    }
    componentWillMount()
    {
        this.getMIData().done();
    }
    onPress(){
        this.props.navigator.push({
            id:'MentorPa',

        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{
                    paddingTop: 40,
                    paddingLeft: 25,
                    height:100,
                }}
                >
                    <Text style={{fontSize: 35}}>Thank You !</Text>
                </View>


                <View>
                        <View>
                            <Text style={{
                                marginTop: 30,
                                paddingLeft:25,
                                fontSize: 21,
                                marginBottom: 15,
                                color: 'black'}}>
                        You are now a Mentor at Elletourage joining people like Cindy Cindyness the CEO of Starbucks.
                            </Text>
                        </View>

                        <View>
                            <Text style={{
                                marginTop: 15,
                                paddingLeft:25,
                                fontSize: 21,
                                marginBottom: 15,
                                color: 'black'}}>
                        Click "Get Started" below to start mentoring immediately, add a short profile or add a photo.

                            </Text>
                        </View>

                        <View>
                            <Text style={{
                                marginTop: 15,
                                paddingLeft:25,
                                fontSize: 21,
                                marginBottom: 15,
                                color: 'black'}}>
                        Mentoring starts by dedicating as little as 15 minutes for a short coffee.
                            </Text>
                        </View>

                        <View>
                            <Text style={{
                                marginTop: 15,
                                paddingLeft:25,
                                fontSize: 21,
                                //marginBottom: 20,
                                color: 'black'}}>
                        Thanks you so much for making women's lives better.
                            </Text>
                        </View>

                </View>


                <View style={{backgroundColor: 'white', padding: 20, paddingTop: 80}}>
                    <TouchableOpacity
                        activeOpacity={.5}
                        onPress={()=> {this.onPress()}}
                    >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Get Started</Text>
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


module.exports = MentorPd;
