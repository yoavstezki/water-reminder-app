import {
    createAppContainer,
    createBottomTabNavigator,
    createStackNavigator,
    createSwitchNavigator
} from 'react-navigation';

import RegistrationPagesContainer from '../containers/registration/registration-pags.container'
import HomeContainer from '../containers/home/home.container';
import HistoryContainer from '../containers/history/history.container'
import RootConatiner from '../containers/RootContainer';

const AppStack = createBottomTabNavigator({Home: HomeContainer, History: HistoryContainer},);
const AuthStack = createStackNavigator({Registration: RegistrationPagesContainer});

export default createAppContainer(createSwitchNavigator(
    {
        Root: RootConatiner,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'Root',
    }
));
