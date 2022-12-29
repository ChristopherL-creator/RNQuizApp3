/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */

import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Title from '../../components/Title';
import homeStyles from './Style';

const Home = ({navigation}: any) => { 
    return ( 
        <View style={homeStyles.container}> 
            <Title titleText="QUIZZLER" /> 

            <View style={homeStyles.bannerContainer}> 
                <Image 
                style={homeStyles.banner} 
                resizeMode="contain"
                source={{
                    uri: 'https://cdni.iconscout.com/illustration/premium/thumb/giving-different-feedback-and-review-in-websites-2112230-1779230.png',
                }} />
            </View> 

            <TouchableOpacity 
            style={homeStyles.button}
            onPress={() => navigation.navigate('Quiz')}> 
                <Text style={homeStyles.buttonText}> 
                    Start
                </Text>
            </TouchableOpacity>
        </View>
    );
}; 

export default Home; 
