import {
    createAppContainer,
    createBottomTabNavigator,
    createStackNavigator,
    createSwitchNavigator
} from 'react-navigation';

import RegistrationPagesContainer from '../containers/registration/registration-pags.container'
import HomeContainer from '../containers/home/home.container';
import HistoryContainer from '../containers/history/history.container'
import RootContainer from '../containers/RootContainer';
import SettingContainer from '../containers/settings/setting.container';

const AppStack = createBottomTabNavigator(
    {
        Home: HomeContainer,
        Setting: SettingContainer,
        History: HistoryContainer
    });

const AuthStack = createStackNavigator(
    {
        Registration: RegistrationPagesContainer
    }, {
        headerMode: 'none',
    });

const switchNavigator = createSwitchNavigator(
    {
        Root: RootContainer,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'Root',
    },
);
export default createAppContainer(switchNavigator);
