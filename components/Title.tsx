/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; 
import PropTypes from 'prop-types';

//  used pureComponent instead of functional component
class Title extends React.PureComponent<{titleText: string}, {value: string}> {
    render() { 
        
        return ( 
            <View style={styles.container}> 
                <Text style={styles.title}> 
                    {this.props.titleText}
                </Text>
            </View>
        );
    }
} 

// declare prop type
Title.propTypes = { 
    titleText: PropTypes.string,
}; 
//  defined default prop if custome one is missing
Title.defaultProps = { 
    titleText: 'titletext missing',
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
