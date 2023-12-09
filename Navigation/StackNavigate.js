import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Bottomtab from './Bottomtab';
import PersonalInfo from '../Screens/PersonalInfo';
import Countryselect from '../Screens/Countryselect';
import EnterAmount from '../Screens/EnterAmount';
import Details from '../Screens/Details';
import Dataprivacy from '../Screens/Dataprivacy';
const Stack = createStackNavigator();

const StackNavigate = ({userInfo}) => {
    
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Bottomtab" component={Bottomtab} initialParams={{userInfo:userInfo}}/>
      <Stack.Screen name="PersonalInfo" component={PersonalInfo} initialParams={{userInfo:userInfo}}/>
      <Stack.Screen name="Countryselect" component={Countryselect} initialParams={{userInfo:userInfo}}/>
      <Stack.Screen name="EnterAmount" component={EnterAmount} initialParams={{userInfo:userInfo}}/>
      <Stack.Screen name="Details" component={Details} initialParams={{userInfo:userInfo}}/>
      <Stack.Screen name="Dataprivacy" component={Dataprivacy} initialParams={{userInfo:userInfo}}/>
      
    </Stack.Navigator>
  )
}

export default StackNavigate