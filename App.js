import React, { Component } from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';

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
        <View style={styles.buttonContainer}>
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
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={() => {this.setState({textDisp: "Great!"})}}
            title="This looks great!"
          />
          <Button
            onPress={() => {this.setState({textDisp: "OK Pressed"})}}
            title="OK!"
            color="#841584"
          />
        </View>
        <View>
          <Text>{this.state.textDisp}</Text>
        </View>
      </View>
    );
  }
}


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
  }
});
