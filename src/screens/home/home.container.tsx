import {Dispatch} from "redux";
import {connect} from "react-redux";
import HomeComponent from "./components/home.component";

const mapStateToProps = (state: any) => {
    return {
        ...state
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeComponent)
