import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setCreated, setDailyGoal, setSex, setUnit, setWeight, sexPage } from '../../actions';
import { computeDailyGoalSelector, registrationSelector } from '../../reducers/registration-reducer';
import RegistrationPagesComponent from './components/registration-pages.component';


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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegistrationPagesComponent)
