
import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    AlertIOS,
    AsyncStorage
} from 'react-native';
import APIData from '../lib/APIData';



const STORAGE_TOKEN = '@LWTL:id_token';
const STORAGE_APIRECOMMENDATIONS = '@LWTL:recommendations';
class MentorPm extends Component {

    constructor()
    {
        super();
        this.state ={
            test:'',
            testArray:[],
            id:[],
            apiObject: {},
        }
    };
    onPress(){
        this.props.navigator.push({
            id:'MentorPb',

        });
    }

    getData = async () => {
        const APIObject = new APIData();

        APIObject.getAPIdata(STORAGE_TOKEN, STORAGE_APIRECOMMENDATIONS);
        try {
            var resp = await AsyncStorage.getItem(STORAGE_APIRECOMMENDATIONS);
            if (resp !== null) {

                var object = JSON.parse(resp);
                this.setState({testArray:object.recommendations});
                this.setState({apiObject: object});
               // console.log(this.state.apiObject);
               //this.setState({test:object.recommendations[0].user.username});
               // AlertIOS.alert(this.state.testArray[0].id.toString());
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
    render() {

        var i = -1;
        var WholeNews = this.state.testArray.map(function(item){
            i++;
            return(

                <Text style={{fontSize: 40, alignItems: 'center'}}>{item.id}</Text>
            );
        });
        return (
            <View style={styles.container}>
                <View>


                    <View style={{
                    paddingHorizontal: 35,
                    paddingTop: 40,
                    borderTopWidth: 1,
                    marginTop: 140,
                    justifyContent:'center'}}
                    >

                        <TouchableOpacity activeOpacity={.5} style={{justifyContent: 'center'}}>

                            <Text style={{fontSize: 8, alignItems: 'center'}}>

                                {this.state.testArray[0]}


                            </Text>
                            <Text style={{fontSize: 20,}}>
                                I'm looking for a woman mentor to help guide my life, business or family.
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                    paddingHorizontal: 35,
                    paddingTop: 40,
                    borderTopWidth: 1,
                    marginTop: 80,
                    justifyContent:'center'}}
                    >
                        <TouchableOpacity
                            activeOpacity={.5}
                            style={{justifyContent: 'center'}}
                            onPress={()=> {this.onPress()}}>
                            <Text style={{fontSize: 40, alignItems: 'center'}}>
                                Be a Mentor >>
                            </Text>
                            <Text style={{fontSize: 20,}}>
                                I want to mentor women and help improve their lives.
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>

        );
    }
}


const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: 'white'
        },

        wrapper: {
            paddingHorizontal: 15
        },
    }
);


module.exports = MentorPm;
