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

class Member4 extends Component {
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
    onPress(){
        this.props.navigator.push({
            id:'MenuP',

        });
    }

    render() {
        this.dataArrayMapping(this.state.DataArray, this.state.username ,this.state.fullName);
        return (
            <ScrollView style={styles.container}>

                <View style={styles.mem41}>
                        <View>
                            <Text style={styles.mem42}>
                                Waiting for Mentor to Confirm
                            </Text>
                        </View>
                </View>

                <View style={styles.mem43}
                >
                    <Text style={styles.mem44}>
                        {this.state.fullName[1]}
                    </Text>
                </View>

                <View>
                    <View>
                        <Text style={styles.mem45}>
                            I'm a small business owner with 5 years experience running my Sports Apparel business and
                            a family of 3 children.
                        </Text>
                    </View>

                    <View>
                        <Text style={styles.mem46}>
                            Startbucks Harbour Centre
                            {"\n"}
                            300 meters from here
                            {"\n"}
                            {"\n"}
                            15 minutes from now
                        </Text>
                    </View>
                </View>

                <View style={styles.mem47}>
                    <TouchableOpacity
                        activeOpacity={.5}
                        onPress={()=> {this.onPress()}}
                    >
                        <View>
                            <Text style={styles.mem48}>
                                Cancel Appointment
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
        mem41: {
            paddingLeft: 25,
            marginTop: 25
        },
        mem42: {
            fontSize: 20
        },
        mem43: {
            paddingTop: 40,
            paddingLeft: 25,
            height:100
        },
        mem44: {
            fontSize: 35
        },
        mem45: {
            marginTop: 3,
            paddingLeft:25,
            fontSize: 19,
            marginBottom: 15,
            color: 'black'
        },
        mem46: {
            marginTop: 15,
            paddingLeft:25,
            fontSize: 19,
            marginBottom: 15,
            color: 'black'
        },
        mem47: {
            marginTop: 240,
            marginLeft: 150,
            height: 50,
            width: 200,
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent:'center'
        },
        mem48: {
            fontSize: 20,
            color: '#FFF6F6'
        }
    }
);

module.exports = Member4;


