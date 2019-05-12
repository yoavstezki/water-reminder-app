import {connect} from "react-redux";
import SettingComponent from './components/setting.component';
import {compose} from 'recompose';
import {withNamespaces} from "react-i18next";
import {Dispatch} from "redux";
import {setLanguage} from "./store/actions/set-language.action";
import {Languages} from "../../i18n/languages.enum";


const mapStateToProps = (state: any) => {
    return {
        ...state
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setLanguages: (lng: Languages) => dispatch(setLanguage(lng))
});


export default compose(
    withNamespaces(''),
    connect(mapStateToProps, mapDispatchToProps)
)(SettingComponent)
