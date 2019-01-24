import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount() {
	firebase.initializeApp({
    apiKey: 'AIzaSyBmhOdu7gjS7pD6IFQLcqPQKYbJX5iLrl0',
    authDomain: 'auth-89bb4.firebaseapp.com',
    databaseURL: 'https://auth-89bb4.firebaseio.com',
    projectId: 'auth-89bb4',
    storageBucket: 'auth-89bb4.appspot.com',
    messagingSenderId: '509190226769'
  });
}

	render() {
		return (
			<View>
			<Header headerText="Authentication" />
				<LoginForm />
			</View>
		);
	}
}

export default App;
