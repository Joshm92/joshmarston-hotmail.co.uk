import React from "react";
import Score from "./Score";

const Scores = ({ player1Serving, player1Score, player2Score, handlePlayer1Score, handlePlayer2Score }) => {
    return ( 
        <div className="row mb-4">
            <Score 
                title={ "Player 1 "}
                score={ player1Score}
                handleScore={ handlePlayer1Score}
                serving={ player1Serving}
            />

            <Score 
                title={ "Player 2 "}
                score={ player2Score}
                handleScore={ handlePlayer2Score}
                serving={ !player1Serving}
            />
        </div>
    )
}

export default Scores;