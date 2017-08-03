import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    ScrollView,
    TouchableOpacity,
    AsyncStorage,
    AlertIOS,
} from 'react-native';

class Member3 extends Component {
    constructor()
    {
        super();
        this.state ={
            apiObject: {},
            DataArray:[],
            username:[],
            fullName:[],
            key:{TOKEN_KEY:'@LWTL:id_token',DATA_KEY:'@LWTL:recommendations'}
        }

    };

    getData = async () => {

        try {
            var resp = await AsyncStorage.getItem(this.state.key.DATA_KEY);
            if (resp !== null) {

                var object = JSON.parse(resp);
                this.setState({DataArray:object.recommendations});
                this.setState({apiObject: object});
                // console.log(this.state.apiObject);
                // AlertIOS.alert(this.state.DataArray[0].connection_type);
            }
            else
            {
                this.setState({'string': 'failed'});
            }
        } catch(error)
        {
            this.setState({'string': 'error'});
        }
    }
    componentWillMount()
    {
        this.getData().done();
    }

    dataArrayMapping(dataArray,usernameA,fullNameA)
    {
        var i = -1;
        dataArray.map(function(item){
            i++;
            usernameA.push(item.user.username);
            fullNameA.push(item.user.profile.first_name+" "+item.user.profile.last_name);

        });
    }
    onPress(page){
        if(page == 'a') {
            this.props.navigator.push({
                id: 'Member4'
            });
        }else{
            this.props.navigator.push({
                id: 'Member2'
            });
        }
    }

    render() {
        this.dataArrayMapping(this.state.DataArray, this.state.username ,this.state.fullName);
        return (
            <ScrollView style={styles.container}>

                <View style={styles.mem31}>
                    <TouchableOpacity activeOpacity={.5} onPress={(page)=> this.onPress('b')}>
                        <View>
                            <Text style={styles.mem32}>
                                Back
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.mem33}>
                    <Text style={styles.mem34}>
                        {this.state.fullName[1]}
                    </Text>
                </View>

                <View>
                    <View>
                        <Text style={styles.mem35}>
                            I'm a small business owner with 5 years experience running my Sports Apparel business and
                            a family of 3 children.
                        </Text>
                    </View>

                    <View>
                        <Text style={styles.mem36}>
                            Startbucks Harbour Centre
                            {"\n"}
                            300 meters from here
                            {"\n"}
                            {"\n"}
                            15 minutes from now
                        </Text>
                    </View>

                    <View>
                        <Text style={styles.mem37}>
                            Etiquette
                        </Text>
                    </View>

                    <View>
                        <Text style={styles.mem38}>
                            While not required, elletourage etiquette is that you pay for the coffee as a gesture of
                            appreciation to the mentor that is providing her time to you.
                        </Text>
                    </View>
                </View>

                <View style={styles.mem39}>
                    <TouchableOpacity
                        activeOpacity={.5}
                        onPress={(page)=> this.onPress('a')}
                    >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                Yes, I want to be mentored by   {this.state.fullName[1]}
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
            fontSize: 20,
        },
        mem31: {
            paddingLeft: 25,
            marginTop: 25
        },
        mem32: {
            fontSize: 20
        },
        mem33: {
            paddingTop: 40,
            paddingLeft: 25,
            height:100
        },
        mem34: {
            fontSize: 35
        },
        mem35: {
            marginTop: 3,
            paddingLeft:25,
            fontSize: 19,
            marginBottom: 15,
            color: 'black'
        },
        mem36: {
            marginTop: 15,
            paddingLeft:25,
            fontSize: 19,
            marginBottom: 15,
            color: 'black'
        },
        mem37: {
            marginTop: 40,
            paddingLeft:25,
            fontSize: 19,
            marginBottom: 15,
            color: 'black'
        },
        mem38: {
            marginTop: 15,
            paddingLeft:25,
            fontSize: 19,
            color: 'black'
        },
        mem39: {
            marginTop: 30,
            backgroundColor: 'white',
            padding: 20,
            paddingTop: 30
        }
    }
);

module.exports = Member3;

