import { connect } from "react-redux";
import Player from "./Player"

const mapStateToProps = (state) => {
    return {
        score:state.player2,
        serving:!state.player1Serving,
        title:"Player 2"
    }

    

}

const mapDispatchToProps =(dispatch) => {
    return {
        handleScore: () => { dispatch({type:'INCREMENT_PLAYER_2'}) }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Player) 

