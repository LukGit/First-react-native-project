import React, { Component } from 'react';
import { Button, StyleSheet, View, Text, ScrollView, Image } from 'react-native';

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
  }
});

export default class ButtonBasics extends Component {
  state = {
    textDisp: "ok"
  }

  componentDidMount(){
    this.setState({
      textDisp: "Button Pressed"
    })
    console.log(this.state.textDisp)
  } 
  _onPressButton() {
    // this.setState({
    //   textDisp: "Button Pressed"
    // })
    alert('You tapped the button!')
  }
  
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
            onPress={() => {this.setState({textDisp: "Great!"})}}
            title={this.state.textDisp}
          />
          <Button
            onPress={() => {this.setState({textDisp: "OK Pressed"})}}
            title="OK!"
            color="black" 
          />
        </View>
        <View style={styles.buttonContainer}>
          <Text
          style={styles.textStyle}
          >{this.state.textDisp}</Text>
        </View>
        <ScrollView>
          <Text style={styles.textStyle}>Scroll me plz</Text>
          <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
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


