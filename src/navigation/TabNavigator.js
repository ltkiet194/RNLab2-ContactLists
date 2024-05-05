import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {MaterialIcons} from '@expo/vector-icons'
import Contacts from '../screen/Contacts';
import Profile from '../screen/Profile';
import User from '../screen/User';
import Favorites from '../screen/Favorites';
import colors from '../utility/colors'
import Options from '../screen/Options';

const getTabBarIcon = icon => ({tintColor}) => (
    <MaterialIcons name={icon} size={26} style={{color:tintColor}}></MaterialIcons>
);

const Stack = createNativeStackNavigator();
const ContactsScreens = () =>{
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
                const {contact} = route.params ;
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

const FavoritesScreens = () =>{
    return (
        <Stack.Navigator initialRouteName='Favorites'>
            <Stack.Screen name='Favorites' component={Favorites} options={{title:'Favorites'}}></Stack.Screen>
            <Stack.Screen name='Profile' component={Profile} options={{title:'Profile'}}></Stack.Screen>
        </Stack.Navigator>
    )
}

const UserScreens = ({navigation}) =>{
    return (
        <Stack.Navigator initialRouteName='User'>
            <Stack.Screen 
                name='User' 
                component={User} 
                options={{
                    headerTitle:"Me",
                    headerTintColor:'white',
                    headerStyle: {backgroundColor: colors.blue},
                    headerRight: () => (
                        <MaterialIcons 
                            name='settings'
                            size={24}
                            style={{color:'white', marginRight:10}}
                            onPress={() => navigation.navigate('Options')}
                        />
                    )
                }}/>
                <Stack.Screen 
                    name='Options' 
                    component={Options} 
                    options={{title:'Options'}}
                />

        </Stack.Navigator>
    )
}
const Tab = createMaterialBottomTabNavigator();
const TabNavigator = () => {
    return (
        <Tab.Navigator 
            initialRouteName='ContactsScreens'
            barStyle={{backgroundColor:colors.black.blue}}
            labeled={false}
            activeColor={colors.greyLight}
            inactiveColor={colors.greyDark}
        >
            <Tab.Screen name='ContactsScreens' component={ContactsScreens} options={{tabBarIcon:getTabBarIcon('list'),}}>
            </Tab.Screen>
            <Tab.Screen name='FavoritesScreens' component={FavoritesScreens} options={{tabBarIcon:getTabBarIcon('star'),}}>
            </Tab.Screen>
            <Tab.Screen name='UserScreens' component={UserScreens} options={{tabBarIcon:getTabBarIcon('person'),}}>
            </Tab.Screen>

        </Tab.Navigator>
    )
}

export default TabNavigator