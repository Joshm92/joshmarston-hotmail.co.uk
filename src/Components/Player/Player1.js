import { connect } from "react-redux";
import Player from "./Player"

const mapStateToProps = (state) => {
    return {
        score:state.player1,
        serving:state.player1Serving,
        title:"Player 1"
    }


}

const mapDispatchToProps =(dispatch) => {
    return {
        handleScore: () => { dispatch({type:'INCREMENT_PLAYER_1'}) }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Player) 