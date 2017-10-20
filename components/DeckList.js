import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { getDecks } from '../utils/api';
import { addDecks } from '../actions';

import { lightBlue, lighterBlue, lightestBlue } from '../utils/colors';

import DeckListItem from './DeckListItem';

class DeckList extends Component {
  componentDidMount() {
    getDecks()
      .then((decks) => {
        this.props.dispatch(addDecks(decks))
      })
  }

  render() {
    const deckItemColors = [lightBlue, lighterBlue, lightestBlue]

    return (
      <ScrollView>
        {this.props.decks.map((deck, i) => (
          <DeckListItem
            title={deck.title}
            amountOfCards={deck.cards.length}
            key={deck.title}
            navigation={this.props.navigation}
            color={deckItemColors[i % 3]}
          />
        ))}
      </ScrollView>
    );
  }
}

function mapStateToProps (state) {
  const deckKeys = Object.keys(state.decks);
  const decks = deckKeys.map(key => state.decks[key]);

  return {
    decks: decks
  };
}

export default connect(mapStateToProps)(DeckList);
