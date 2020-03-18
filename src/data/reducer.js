import initial from './initial';
import getWinner from './getWinner';
import updateP1Score from './updateP1Score';
import updateP2Score from './updateP2Score';
import switchServer from './switchServer';



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

export default reducer;