import React, {Component} from 'react';
import {connect} from "react-redux";
import {appSelector} from "../store/app/app.reducer";
import {Spinner} from "native-base";
import {store} from '../store';


class RootContainer extends Component<any> {

    componentDidMount(): void {

        const {app: {created}} = store.getState();
        const {navigation} = this.props;

        navigation.navigate(created ? 'App' : 'Auth')
    }

    render() {
        return <Spinner color='blue'/>
    }
}

const mapStateToProps = (state: any) => {
    return {
        ...appSelector(state)
    }
};

export default connect(mapStateToProps)(RootContainer)
