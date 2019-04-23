import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {setDailyGoal, setSex, setUnit, setWeight, sexPage} from './store/actions';
import {setCreated} from "../../store/app/sexCreated.action";
import {computeDailyGoalSelector, registrationSelector} from './store/reducers/registration-reducer';
import RegistrationPagesComponent from './components/registration-pages.component';
import {compose} from 'recompose';
import {withNamespaces} from 'react-i18next';


const mapStateToProps = (state: any) => {
    return {
        ...registrationSelector(state),
        computeDailyGoal: () => computeDailyGoalSelector()(state),
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setUnit: (unit: any) => dispatch(setUnit(unit)),
    setWeight: (weight: string) => dispatch(setWeight(weight)),
    setSex: (sex: any) => dispatch(setSex(sex)),
    setDailyGoal: (dailyGoal: string) => dispatch(setDailyGoal(dailyGoal)),
    setPage: (page: number) => dispatch(sexPage(page)),
    setCreated: () => dispatch(setCreated())
});

export default compose(
    withNamespaces(),
    connect(mapStateToProps, mapDispatchToProps)
)(RegistrationPagesComponent);
