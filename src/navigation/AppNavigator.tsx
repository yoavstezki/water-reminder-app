import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation';

import RegistrationPagesContainer from '../screens/registration/registration-pags.container'
import HomeContainer from '../screens/home/home.container';
import HistoryContainer from '../screens/history/history.container'
import RootContainer from '../screens/RootContainer';
import SettingContainer from '../screens/settings/setting.container';
import AddContainerComponent from '../screens/containers/create/add-container.component';

const BottomTabStack = createBottomTabNavigator(
    {
        Home: HomeContainer,
        Setting: SettingContainer,
        History: HistoryContainer
    }, {
        navigationOptions: {
            header: null
        }
    });

const AppStack = createStackNavigator(
    {
        Root: BottomTabStack,
        AddContainer: AddContainerComponent
    },{
        headerMode: 'none',
    }
);

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
