/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MainNavigator from './src/screens/main/MainNavigator';

AppRegistry.registerComponent(appName, () => MainNavigator);
