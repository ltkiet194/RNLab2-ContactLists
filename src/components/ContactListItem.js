import { View, Text, TouchableHighlight, StyleSheet, Image } from 'react-native';
import React from 'react';
import colors from '../utility/colors';

const ContactListItem = ({name, avatar, phone, onPress}) => {
    return (
        <TouchableHighlight
            underlayColor={colors.grey}
            className="flex-1 px-5 bg-gray-200 lex-row"
            onPress={onPress}
        >
            <View className="flex-row items-center flex-1 py-5"> 
                <Image
                    className="w-10 h-10 rounded-full"
                    source={{
                        uri:avatar
                    }}
                ></Image>
                <View className="justify-center flex-1 ml-5"> 
                    <Text className="text-xl font-bold">{name}</Text>
                    <Text className="text-lg text-blue-600">{phone}</Text>
                </View>
            </View>
        </TouchableHighlight>
    )
}

export default ContactListItem
