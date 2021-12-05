import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const EatsScreen = () => {
    return (
        <View style={tw`p-5 bg-white h-full`}>
            <Text>Order some food</Text>
        </View>
    )
}

export default EatsScreen

const styles = StyleSheet.create({})
