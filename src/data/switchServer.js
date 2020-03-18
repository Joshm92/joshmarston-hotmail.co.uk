const switchServer = state => {
    console.log('switchServer');
    const total = state.player1 + state.player2;

    const needToSwitch = total % 5 === 0;

    return {
        ...state,
        player1Serving: needToSwitch ? !state.player1Serving : state.player1Serving
    }
};

export default switchServer;