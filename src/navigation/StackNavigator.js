import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createStackNavigator} from '@react-navigation/stack'
import Contacts from '../screen/Contacts'
import Profile from '../screen/Profile'
import colors from '../utility/colors'

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (

        <Stack.Navigator 
        initialRouteName='Contacts'
        screenOptions={{
            headerTintColor:'white',
            headerStyle:{backgroundColor:'tomato'},
            headerTitleAlign:'center'
        }}
        >
            <Stack.Screen name='Contacts' component={Contacts} options={{title:'Contacts'}}></Stack.Screen>
            <Stack.Screen name='Profile' component={Profile} options={({route}) =>{
                const {contact} = route.params;
                const {name} = contact;
                return {
                    title:name.split(' ')[0],
                    headerTintColor:'white',
                    headerStyle:{
                        backgroundColor:colors.blue,
                    }
                }
            }}></Stack.Screen>
        </Stack.Navigator>
  )
}

export default StackNavigator