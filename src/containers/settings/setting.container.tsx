import {connect} from "react-redux";
import SettingComponent from './components/setting.component';
import {compose} from 'recompose';
import {withNamespaces} from "react-i18next";
import {Dispatch} from "redux";
import {setLanguage, sexPickerVisible, languagePickerVisible} from "./store/actions";
import {Languages} from "../../i18n/languages.enum";
import {Sex, Unit} from "../../utils";
import {setSex, setUnit} from "../registration/store/actions";
import {setUnitsPickerVisible} from "./store/actions/setUnitsPickerVisible.action";
import {setWeightPickerVisible} from "../../store/ui/actions/set-weight.action";

const mapStateToProps = (state: any) => {
    return {
        ...state,
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setLanguages: (lng: Languages) => dispatch(setLanguage(lng)),
    setLanguagePickerVisible: (visible: boolean) => dispatch(languagePickerVisible(visible)),
    setSexPickerVisible: (visible: boolean) => dispatch(sexPickerVisible(visible)),
    setSex: (sex: Sex) => dispatch(setSex(sex)),
    setUnitsPickerVisible: (visible: boolean) => dispatch(setUnitsPickerVisible(visible)),
    setUnit: (unit: Unit) => dispatch(setUnit(unit)),
    setWeightPickerVisible: (visible: boolean) => dispatch(setWeightPickerVisible(visible)),

});


export default compose(
    withNamespaces(''),
    connect(mapStateToProps, mapDispatchToProps)
)(SettingComponent)
