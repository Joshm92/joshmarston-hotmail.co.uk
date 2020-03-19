import { connect } from "react-redux";
import Reset from "./Reset";

const mapDispatchToProps = (dispatch) => {
    return {
        reset: () => { dispatch({type:'RESET'}) }
    }

}

export default connect(null,mapDispatchToProps)(Reset)
//null because connect expects mapStateToProps but we put null in its place instead