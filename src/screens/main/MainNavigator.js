import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Scan from '../scan/Scan'
import LandingScreen from './landing/LandingScreen'

const Tab = createBottomTabNavigator()

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={LandingScreen} />
                <Tab.Screen name="Scan" component={Scan} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator

const styles = StyleSheet.create({})