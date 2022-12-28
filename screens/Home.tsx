/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Title from '../components/Title';

const Home = ({navigation}) => { 
    return ( 
        <View style={styles.container}> 
            <Title titleText="QUIZZLER" /> 

            <View style={styles.bannerContainer}> 
                <Image 
                style={styles.banner} 
                resizeMode="contain"
                source={{
                    uri: 'https://cdni.iconscout.com/illustration/premium/thumb/giving-different-feedback-and-review-in-websites-2112230-1779230.png',
                }} />
            </View> 

            <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('Quiz')}> 
                <Text style={styles.buttonText}> 
                    Start
                </Text>
            </TouchableOpacity>
        </View>
    );
}; 

export default Home; 

const styles = StyleSheet.create({  
    container: { 
        paddingTop: 40, 
        paddingHorizontal: 20, 
        height: '100%',
    }, 

    banner: { 
        height: 300, 
        width: 300,
    }, 

    bannerContainer: { 
        justifyContent: 'center', 
        alignContent:'center', 
        flex: 1,
    }, 

    button: { 
        width: '100%', 
        backgroundColor: '#184E77', 
        padding: 20, 
        borderRadius: 16, 
        alignItems: 'center', 
        marginBottom: 30,
    }, 

    buttonText: { 
        fontSize: 24, 
        fontWeight: '600', 
        color: '#E6E6F3',
    },
}); 
