import {Dispatch} from "redux";
import {connect} from "react-redux";
import HistoryComponent from "./components/history.component";


const mapStateToProps = (state: any) => {
    return {
        ...state
    }
};


const mapDispatchToProps = (dispatch: Dispatch) => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HistoryComponent)
