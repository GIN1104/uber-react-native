import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";


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
                <GooglePlacesAutocomplete 
                    placeholder="Where From?"
                    style={{
                        container:{
                            flex: 0,
                        },
                        textInput:{
                            fontSize: 18,
                        },
                        }
                    }
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: 'en',
                      }}
                      requestUrl={{
                        useOnPlatform: 'web', // or "all"
                        url:
                        
                          'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
                           // or any proxy server that hits https://maps.googleapis.com/maps/api
                      }}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
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
