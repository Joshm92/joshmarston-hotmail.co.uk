const updateP1Score = state => {
    return {
        ...state,
        player1: state.player1 + 1
    };
};

export default updateP1Score;