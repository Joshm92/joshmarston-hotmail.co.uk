import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// 0.4 make sure to import createStore from redux
import { createStore } from "redux";

// 0 boilerplate

// 0.1 create initial state

const initial = {
    player1: 0,
    player2: 0,
    player1Serving: true,
    winner: 0,
};

// UPDATE FUNCTIONS
const updateP1Score = state => {
    return {
        ...state,
        player1: state.player1 + 1
    };
};


const updateP2Score = state => {
    return {
        ...state,
        player2: state.player2 + 1
    };
};


const switchServer = state => {
    console.log('switchServer');
    const total = state.player1 + state.player2;

    const needToSwitch = total % 5 === 0;

    return {
        ...state,
        player1Serving: needToSwitch ? !state.player1Serving : state.player1Serving
    }
};


const getWinner = state => {

    const theWinner = state.player1 >= 21 || state.player2 >= 21; // setting the winning value to determine whether someone has won or not

    const higherScore = state.player1 > state.player2 ? 1 : 2; // which player has a higher score

    const newWinner = theWinner ? higherScore : 0;
    // see if there is a winner

    return {
        ...state,
        winner: newWinner,
    }
    
};


const reducer = (state, action) => {
    // swith over action type to determine what the user did. You only need actions if it's somthing the user cnad do like hit the reset button or the two player buttons
    switch (action.type) {
        //write one case for each possible user action 
        
        case 'INCREMENT_PLAYER_1': return getWinner(switchServer(updateP1Score(state)));
            // 2.4 return an updated version of state from the reducer
            //this return is function composition. It's taking loads of things and making them return just one thing. it makes things simple. getWinner, Switchserver and updateP1score is all using the same ruturn function.
    

        case 'INCREMENT_PLAYER_2': return getWinner(switchServer(updateP2Score(state))); 

        case 'RESET': return initial;

        // always return state in the default
        default: return state;
    }
};

// step 1. first display values from the store in the app

// 0.3 create the store with the reducer, intitial and optionally redux devtools.
const store = createStore(
    reducer, 
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );


// 2.2 create a function that dispatches something to the reducer

// 2.3 pass function to the app

//STORE FUNCTIONS
const handlePlayer1Score = () => {
    store.dispatch({ type: 'INCREMENT_PLAYER_1'})
};    

const handlePlayer2Score = () => {
    store.dispatch({ type: 'INCREMENT_PLAYER_2'})
};   

const reset = () => {
    store.dispatch({ type: 'RESET'})
};  



// 1.1 create the render function - THE RENDER FUNCTION BELOW ...

const render = () => {
// below code is requesting a copy of the state. 
const state = store.getState();

// step 1.2 move this line of code into the render function
    ReactDOM.render(
        <App 
        // 1.5 pass prop to the app based on the state. taking player1score & player2score to what we've set in app.js
            player1Score={ state.player1 }
            player2Score={ state.player2 }
            handlePlayer1Score= { handlePlayer1Score }
            handlePlayer2Score= { handlePlayer2Score }
            player1Serving={ state.player1Serving }
            reset={ reset }
            winner={ state.winner }
        />, 
        document.getElementById('root')
    );
};

// 2 add interactivity
// 2.1 test that an action makes it through

// step 1.4 prompt the app to receive new data when the state updates
store.subscribe(render);

//step 1.3 call the render function in order to display the app
render();