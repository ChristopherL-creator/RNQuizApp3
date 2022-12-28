/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Title = (props: any) => { 
    return ( 
        <View style={styles.container}> 
            <Text style={styles.title}> 
                {props.titleText}
            </Text>
        </View>
    );
}; 

export default Title; 

const styles = StyleSheet.create({ 
    title: { 
        fontSize: 36, 
        fontWeight: '600', 
        color: '#313131',
    }, 

    container: {
        paddingVertical: 16, 
        justifyContent: 'center',
        alignItems: 'center', 
    },
}); 
