import { combineReducers } from 'redux';

import {
  GAME_START,
  GAME_STARTED,
  CARD_REQUEST,
  ADD_MY_DECK,
  CARD_POP,
  CARD_PASS,
  OPEN_HAND,
} from '../actions/ActionTypes';

let dataState = {
  gameStart: false,
  gameStarting: false,
  deck: [],
  tempplayerHand: [],
  playerHand: [],
  computerHand: [],
  openDeck: [],
  myTurn: true,
};

const GameReducer = (state = dataState, action) => {
  console.log('State in Reducer is : ' + state);
  console.log('Action in Reducer is : ' + action);
  console.log('State gameStart is : ' + state.gameStart);
  console.log('State gameStarting is : ' + state.gameStarting);
  console.log('State deck is : ' + state.deck);
  console.log('State playerHand is : ' + state.playerHand);
  console.log('State computerHand is : ' + state.computerHand);
  console.log('State openDeck is : ' + state.openDeck);
  console.log('State myTurn is : ' + state.myTurn);
  console.log('State actionType is : ' + action.type);

  switch (action.type) {
    case GAME_START:
      return {
        ...state,
        gameStarting: action.data.gameStarting,
        deck: action.data.cards,
      };
    case GAME_STARTED:
      return {
        ...state,
        gameStart: action.data.gameStart,
        myTurn: action.data.myTurn,
        playerHand: [
          state.deck.shift(),
          state.deck.shift(),
          state.deck.shift(),
        ],
        computerHand: [
          state.deck.shift(),
          state.deck.shift(),
          state.deck.shift(),
        ],
      };
    case CARD_REQUEST: {
      return {
        ...state,
        openDeck: [...state.openDeck, state.deck.shift()],
      };
    }
    case ADD_MY_DECK: {
      const card = state.openDeck.pop();
      console.log('state deck length : ' + state.openDeck.length)
      console.log('state PlayerHand length' + state.playerHand.length)
      return {
        ...state,
        openDeck: state.openDeck.filter(x => x != card),
        playerHand: [...state.playerHand, card],
      };
    }
    case CARD_POP: {
      const card = state.playerHand;
      console.log('Card pass : ' + card);
      return {
        ...state,
        playerHand: state.playerHand.pop(x => x == card),
        playerHand: [...state.playerHand],
      }
    }
    case CARD_PASS: {
      return {
        ...state,
        openDeck: [...state.openDeck, state.deck.shift()],
        computerHand: [
          state.deck.shift(),
        ]
      }
    }
    case OPEN_HAND: {
      return {
        ...state,
      }
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  GameReducer,
});

export default rootReducer;

