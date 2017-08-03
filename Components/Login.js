import React, { Component } from 'react';
import {
		Text,
		StyleSheet,
		View,
		Image,
	    ScrollView,
		TextInput,
		TouchableOpacity,
		AsyncStorage,
		AlertIOS,
} from 'react-native';

const background = require("../Images/background16.jpg");
const lockIcon = require("../Images/lock.png");
const personIcon = require("../Images/person.png");

class Login extends Component {
		constructor(props){
			super(props);
			this.state = {username: '',
										password: '',apiUrl:''}
		}

		getToken(){
			fetch(this.state.apiUrl, {
				method: 'POST',
				headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					'username': this.state.username,
					'password': this.state.password,
				})
			})
			.then((response) => response.json())
			.then((responseJson) => {

			if (responseJson['error'] != null || responseJson['token'] === undefined){
				AlertIOS.alert(responseJson['error']);
			} else {
					try {
						AsyncStorage.setItem('@LWTL:id_token', responseJson['token']);
				} catch (error){
						AlertIOS.alert(error);
				}
				//AlertIOS.alert(responseJson['token']);

				this.props.navigator.push({
						id: 'MenuP'
				});

			}
			return responseJson['token'];
			})
		}

		onPress(page){
				if(page === 'a') {
						this.getToken();
					}else{
							this.props.navigator.push({
									id: 'SignUp'
							});
					}
			}

		render() {
				return (
						<Image
								style={[styles.background, styles.container]}
								source={background}
								resizeMode="cover"
						>
							<ScrollView>
								<View style={styles.buttonNew2}>
										<TouchableOpacity
												activeOpacity={.5}
												style={styles.buttonNew}
												onPress={(page)=> this.onPress('b')}
										>
												<Text style={styles.buttonText}
												>
													I'm New Here
												</Text>
										</TouchableOpacity>
								</View>

								<View style={styles.wrapper}>
										<View style={styles.label}>
												<Text style={styles.whiteText}
												>
													Account
												</Text>
										</View>

										<View style={styles.inputWrap}>
												<View style={styles.iconWrap}>
														<Image
																source={personIcon}
																style={styles.icon}
																resizeMode="contain"
														/>
												</View>

												<TextInput
														placeholder="please enter your username"
														style={styles.input}
														underlineColorAndroid="transparent"
														onChangeText={(text) => this.setState({'username': text})}
												/>
										</View>

										<View style={styles.label}>
												<Text style={styles.whiteText}>
													Password
												</Text>
										</View>

										<View style={styles.inputWrap}>
												<View style={styles.iconWrap}>
														<Image
																source={lockIcon}
																style={styles.icon}
																resizeMode="contain"
														/>
												</View>

												<TextInput
														placeholder="please enter your password"
														secureTextEntry
														style={styles.input}
														underlineColorAndroid="transparent"
														onChangeText={(text) => this.setState({'password': text})}
												/>
										</View>

										<TouchableOpacity
												activeOpacity={.5}
												onPress={(page)=> this.onPress('a')}

										>
												<View style={styles.button}>
														<Text style={styles.buttonText}
														>
															Sign In
														</Text>
												</View>
										</TouchableOpacity>

										<TouchableOpacity activeOpacity={.5}>
												<View>
														<Text style={styles.forgotPasswordText}
														>
															Forgot Password?
														</Text>
												</View>
										</TouchableOpacity>
								</View>
							</ScrollView>
						</Image>
				);
		}
}

const styles = StyleSheet.create(
		{
				container: {
						flex: 1
				},
				whiteText: {
						color: "#ffffff",
						fontSize: 20
				},
				background: {
						width: null,
						height: null
				},
				wrapper: {

						paddingHorizontal: 15,
						paddingVertical: 40,
						marginTop: 160,
						backgroundColor: 'hsla(0, 0%, 0%, 0.4)'
				},
				inputWrap: {
						flexDirection: "row",
						marginBottom: 15,
						height: 50,
						backgroundColor: "transparent"
				},
				label:{
						backgroundColor: "transparent"
				},
				input: {
						flex: 1,
						paddingHorizontal: 10,
						backgroundColor: '#FFF'
				},
				iconWrap: {
						paddingHorizontal: 7,
						alignItems: "center",
						justifyContent: "center",
						backgroundColor: "#7fff7f"
				},
				icon:{
						width: 20,
						height: 20
				},
				buttonNew2: {
						alignItems: 'flex-end',
						marginTop: 140,
						marginRight: 30
				},
				buttonNew: {
						backgroundColor: "#4cb712",
						paddingHorizontal: 15,
						alignItems: "center",
						justifyContent: "center",
						width: 225,
						height: 60
				},
				button: {
						backgroundColor: "#4cb712",
						paddingHorizontal: 15,
						marginVertical: 15,
						alignItems: "center",
						justifyContent: "center"
				},
				buttonText: {
						color: "#FFF",
						fontSize: 30,
				},
				forgotPasswordText: {
						color: "#FFF",
						backgroundColor: "transparent",
						textAlign: "center"
				}
		}
);

module.exports = Login;
