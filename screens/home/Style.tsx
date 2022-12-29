/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */


import { StyleSheet } from 'react-native';

const homeStyles = StyleSheet.create({  
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

export default homeStyles; 
