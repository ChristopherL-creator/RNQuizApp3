/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Title from '../components/Title';

const Result = ({navigation, route}) => {  
    const {score} = route.params; 
    console.log('score', score); 

    const resultBanner = score > 10 ? 
        'https://cdni.iconscout.com/illustration/premium/thumb/men-celebrating-victory-4587301-3856211.png' : 
        'https://cdni.iconscout.com/illustration/free/thumb/concept-about-business-failure-1862195-1580189.png';

    return ( 
        <View style={styles.container}> 
            <Title titleText="RESULTS"/> 

            <Text style={styles.scoreValue}> 
                {score}
            </Text>

            <View style={styles.bannerContainer}> 
                <Image 
                style={styles.banner} 
                resizeMode="contain"
                source={{
                    uri: resultBanner,
                }} />
            </View> 

            <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('Home')}> 
                <Text style={styles.buttonText}> 
                    GO TO HOME
                </Text>
            </TouchableOpacity>
        </View>
    );
}; 

export default Result; 

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

    scoreValue: { 
        fontSize: 24, 
        fontWeight: '800', 
        alignSelf: 'center', 
        color: '#313131',
    },
}); 
