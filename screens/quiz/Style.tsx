/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */


import { StyleSheet } from 'react-native';

const quizStyles = StyleSheet.create({  
    container: { 
        paddingTop: 40, 
        padding: 12, 
        height: '100%',
    }, 

    top: { 
        marginVertical: 16,
    }, 

    options: { 
        marginVertical: 16, 
        flex: 1,
    }, 

    bottom: { 
        marginBottom: 12, 
        paddingVertical: 16, 
        justifyContent: 'space-between', 
        flexDirection: 'row', 
    }, 

    button: { 
        backgroundColor: '#1A759F', 
        padding: 16, 
        paddingHorizontal: 16, 
        borderRadius: 16, 
        alignItems: 'center', 
        marginBottom: 30,
    }, 

    buttonText: { 
        fontSize: 18, 
        fontWeight: '600', 
        color: '#E6E6F3',
    }, 

    question: { 
        fontSize: 28, 
        color: '#313131',
    }, 

    option: {
        fontSize: 18, 
        fontWeight: '500',
        color: '#E6E6F3',
    }, 

    optionButton: { 
        paddingVertical: 12, 
        marginVertical: 6, 
        backgroundColor: '#34A0A4', 
        paddingHorizontal: 12, 
        borderRadius: 12,
    }, 

    loadingView: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100%',
    }, 

    loadingText: { 
        fontSize: 32, 
        fontWeight: '700', 
        color: '#313131',
    },
}); 

export default quizStyles; 
