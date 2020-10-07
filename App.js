import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { Button, Input, Icon } from 'galio-framework'
import djiImg1 from './img/DJI_0084.jpeg'
import liveLong from './sounds/challenge.mp3'
import { Audio } from 'expo-av'

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textStyle: {
    color: "red",
    fontFamily: "Helvetica-Bold",
    fontSize: 20,
    textAlign: "center"
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: "14%"
  }
});

const soundObject = new Audio.Sound()

export default class ButtonBasics extends Component {
  state = {
    textDisp: "ok"
  }
  
  componentDidMount(){
    this.setState({
      textDisp: "Button Pressed"
    })
    console.log(this.state.textDisp)
    soundObject.loadAsync(require('./sounds/challenge.mp3'))
    const USER_URL = 'http://10.0.1.11:3000/users'
    const reqObj = {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({name: "Ivan"})
    }
    fetch(USER_URL, reqObj)
    .then(resp => resp.json())
    .then(userData => {
      console.log("fetched user", userData)
    })
  } 
  _onPressButton() {
    // this.setState({
    //   textDisp: "Button Pressed"
    // })
    alert('You tapped the button!')
  }

  playSound() {
    
      // An error occurred!
      soundObject.playAsync()
      console.log("played sound")
    }
    // try {
    //   await soundObject.loadAsync(liveLong);
    //   await soundObject.playAsync();
    //   // Your sound is playing!

    //   // Don't forget to unload the sound from memory
    //   // when you are done using the Sound object
    //   await soundObject.unloadAsync();
    // } catch (error) {
      

  render() {
    console.log(this.state.textDisp)
    return (
      <View style={styles.container}>
        {/* <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
            color="#841584"
          />
        </View> */}
        <View style={styles.alternativeLayoutButtonContainer}>
          
          <Button
            onPress={() => {this.setState({textDisp: "This is Great!"})}}>
            Great!
          </Button>
          
          <Button
            onPress={() => {
              this.playSound
              this.setState({textDisp: "OK then!"})
              }
            }
            color="black" >
            OK!
            </Button> 
        </View>
        <View style={styles.buttonContainer}>
          <Text
          style={styles.textStyle}
          >{this.state.textDisp}</Text>
          <Input
            right
            placeholder="Icon Right"
            iconContent={
            <Icon
              size={11}
              name="search-zoom-in"
              family="ArgonExtra"
          />
      }
    />
        </View>
          <ScrollView>
          <Text style={styles.textStyle}>Scroll me plz</Text>
          <Image source={djiImg1} style={styles.image} />
          <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
          <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
          <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
          <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
          <Text style={styles.textStyle}>If you like</Text>
          <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
          <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
          <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
          <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
          <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
          <Text style={styles.textStyle}>Scrolling down</Text>
          <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
          <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
          <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
          <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
          <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
          <Text style={styles.textStyle}>What's the best</Text>
          <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
          <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
          <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
          <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
          <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
          <Text style={styles.textStyle}>Framework around?</Text>
          <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
          <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
          <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
          <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
          <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
          <Text style={styles.textStyle}>React Native</Text>
        </ScrollView>
      </View>
    );
  }
}


