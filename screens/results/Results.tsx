/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */

import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Title from '../../components/Title';
import resultsStyles from './Style';

const Result = ({navigation, route}: any) => {  
    const {score} = route.params; 
    console.log('score', score); 

    const resultBanner = score > 10 ? 
        'https://cdni.iconscout.com/illustration/premium/thumb/men-celebrating-victory-4587301-3856211.png' : 
        'https://cdni.iconscout.com/illustration/free/thumb/concept-about-business-failure-1862195-1580189.png';

    return ( 
        <View style={resultsStyles.container}> 
            <Title titleText="RESULTS"/> 

            <Text style={resultsStyles.scoreValue}> 
                {score}
            </Text>

            <View style={resultsStyles.bannerContainer}> 
                <Image 
                style={resultsStyles.banner} 
                resizeMode="contain"
                source={{
                    uri: resultBanner,
                }} />
            </View> 

            <TouchableOpacity 
            style={resultsStyles.button}
            onPress={() => navigation.navigate('Home')}> 
                <Text style={resultsStyles.buttonText}> 
                    GO TO HOME
                </Text>
            </TouchableOpacity>
        </View>
    );
}; 

export default Result; 


