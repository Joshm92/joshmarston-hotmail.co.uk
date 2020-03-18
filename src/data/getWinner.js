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

export default getWinner;