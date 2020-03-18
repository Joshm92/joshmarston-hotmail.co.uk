const updateP2Score = state => {
    return {
        ...state,
        player2: state.player2 + 1
    };
};

export default updateP2Score;