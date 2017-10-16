import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { white, blue, black } from '../utils/colors';

class NewCard extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.title
    };
  }

  state = {
    frontText: '',
    backText: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textInstructions}>
          Front:
        </Text>
        <TextInput
          style={styles.textInput}
          value={this.state.frontText}
          onChangeText={(frontText) => this.setState({frontText: frontText})}
        />
        <Text style={styles.textInstructions}>
          Back:
        </Text>
        <TextInput
          style={styles.textInput}
          value={this.state.backText}
          onChangeText={(backText) => this.setState({backText})}
        />
        <TouchableOpacity style={styles.button} onPress={()=>{}}>
          <Text style={styles.buttonText}>Add Card</Text>
        </TouchableOpacity>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: white
  },
  textInstructions: {
    marginTop: 16,
    fontSize: 16,
    width: 200
  },
  textInput: {
    width: 200,
    height: 40,
    marginTop: 20,
    borderColor: blue,
    borderWidth: 1,
    color: black
  },
  button: {
    height: 45,
    width: 200,
    backgroundColor: white,
    padding: 10,
    marginTop: 20,
    borderRadius: 7,
    borderColor: blue,
    borderWidth: 2,
  },
  buttonText: {
    color: blue,
    fontSize: 18,
    textAlign: 'center'
  }
})

export default NewCard;
