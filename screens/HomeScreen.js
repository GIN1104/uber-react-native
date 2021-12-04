import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';


const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`} >
            <View style={tw`p-5`}>
                <Image
                style={{
                    width: 100,
                    height: 100,
                    resizeMode: "contain",
                }}
                source={{
                    uri: "https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png",
                }}
                />
                <NavOptions />   
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen;

// const style = StyleSheet.create({
//     text: {
//         color: "blue",
//         margin: 20,
//     }
// })
