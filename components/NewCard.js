import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';

import { createCard } from '../utils/api';
import { addCard } from '../actions';

import { white, blue, black } from '../utils/colors';

import Button from './Button';

class NewCard extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Create New Question'
    };
  }

  state = {
    frontText: '',
    backText: ''
  }

  submitCard = () => {
    const { title } = this.props.navigation.state.params;

    createCard(title, this.state)
    this.props.dispatch(addCard(title, this.state))
    this.props.navigation.goBack()
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
        <Button
          onPress={this.submitCard}
          text={'Add Card'}
        />
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
  }
})

export default connect()(NewCard);
