import { View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home';
import History from '../Screens/History';
import Profile from '../Screens/Profile';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Bottomtab = (userInfo) => {
  return (
    <View style={{flex:1}}>
    
    <Tab.Navigator initialRouteName='Home' screenOptions={{
      headerShown:false,
      tabBarStyle:{height:60,backgroundColor:'rgb(53, 128, 192)'},tabBarLabel:()=>null
    }}>
      <Tab.Screen name="Home" component={Home} initialParams={{data:userInfo.route.params.userInfo}} options={{tabBarIcon:({focused })=>(
              <FontAwesome name="home" size={24} style={{backgroundColor:focused?'#EF9B4D':'#0000',borderRadius:100,padding:10}} color={focused?'#fff':'#000'}/>
              ),}}/>
      <Tab.Screen name="History" component={History} initialParams={{data:userInfo.route.params.userInfo}} options={{tabBarIcon:({focused })=>(
              <FontAwesome5 name="history" size={24} style={{backgroundColor:focused?'#EF9B4D':'#0000',borderRadius:100,padding:10}} color={focused?'#fff':'#000'}/>
              ),}} />
      <Tab.Screen name="Profile" component={Profile} initialParams={{data:userInfo.route.params.userInfo}} options={{tabBarIcon:({focused })=>(
              <Ionicons name="person-circle-sharp" size={24} style={{backgroundColor:focused?'#EF9B4D':'#0000',borderRadius:100,padding:10}} color={focused?'#fff':'#000'}/>
              ),}}/>
    </Tab.Navigator>
    
    </View>
    
  )
}

export default Bottomtab