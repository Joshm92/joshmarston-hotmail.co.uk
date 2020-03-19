import React from "react";
import Winner from "./Components/Winner"
import Header from "./Components/Header"
import Reset from "./Components/Reset"
import Player1 from "./Components/Player/Player1"
import Player2 from "./Components/Player/Player2"



const App = () => (

    <React.Fragment>

        {/* header */}
        {/* <header className="jumbotron mt-4 mb-0">
            <h1>PongPing</h1>
        </header> */}

        <Header />

        {/* scores */}

        {/* < Scores 
            player1Serving={ player1Serving }
            player1Score={ player1Score }
            player2Score={ player2Score }
            handlePlayer1Score={handlePlayer1Score}
            handlePlayer2Score={handlePlayer2Score}
        /> */}

        <div className="row mb-4">
        <Player1/>

        <Player2 />
        </div>

        {/* <div className="row mb-4">
            <div className="col-md-6 mt-4">
                <div className={"card text-center" + (player1Serving ? " bg-dark text-white" : "")}>
                    <h5 className="card-header">Player 1</h5>
                    <div className="card-body">
                        <p className="card-text display-1">{player1Score}</p>
                    </div>

                    <div className="card-footer">
                        <button onClick={ handlePlayer1Score} 
                        className="form-control btn btn-success">+</button>
                    </div>
                </div>
            </div>

            <div className="col-md-6 mt-4">
                <div className={"card text-center" + (!player1Serving ? " bg-dark text-white" : "")}>
                    <h5 className="card-header">Player 2</h5>
                    <div className="card-body">
                        <p className="card-text display-1">{player2Score}</p>
                    </div>
                    <div className="card-footer">
                        <button onClick={ handlePlayer2Score} 
                        className="form-control btn btn-success">+</button>
                    </div>
                </div>
            </div>
        </div> */}

        { /* winner message */}
        {/* { winner > 0 ? (<h2 className="alert alert-success">Player { winner } wins!</h2>) : null } */}

        <Winner />

        <hr />

        { /* reset button */}
        {/* <button onClick={reset} 
        className="btn btn-danger">Reset</button> */}

        < Reset />

    </React.Fragment>
);

export default App;