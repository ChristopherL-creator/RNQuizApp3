/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Questions from '../models/Questions';

const shuffleArray = (array: string | any[]) => { 
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

const Quiz = ({navigation}: any) => { 
    const [questions, setQuestions] = useState<Questions>(); 
    const [options, setOptions] = useState([]);
    const [ques, setQues] = useState(0); 
    const [score, setScore] = useState(0); 
    const [isLoading, setIsLoading] = useState(false);

    const getQuiz = async () => { 
        try {
            setIsLoading(true);
    
            const url = 'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986'; 
            const res = await fetch(url); 
            const data = await res.json(); 
            console.log('res', data.results);
             // console.log('res', data.results[0]);
    
            setQuestions(data.results); 
            setOptions(generateOptionsAndShuffle(data.results[0])); 
    
            setIsLoading(false);
        } catch (error) {
            console.log('error', error);
        }
    }; 

    useEffect(() => { 
        getQuiz();
    }, []); 

    const generateOptionsAndShuffle = (_question: any) => { 
        const options = [..._question.incorrect_answers]; 
        options.push(_question.correct_answer);  
        shuffleArray(options);
        // console.log('shuffled options', options); 

        return options;
    };

    const handleNextPress = () => { 
        setQues(ques + 1); 
        setOptions(generateOptionsAndShuffle(questions[ques + 1]));
    }; 

    const handSelectedOption = (_option) => { 
        if (_option === questions[ques].correct_answer) { 
            setScore(score + 10);
        } 

        if (ques !== 9) {
            setQues(ques + 1); 
            setOptions(generateOptionsAndShuffle(questions[ques + 1]));
            console.log(_option === questions[ques].correct_answer);
        } 

        if (ques === 9) {
            handleShowResults();
        }
    }; 

    const handleShowResults = () => { 
        navigation.navigate('Results', { 
            score: score,
        });
    };

    return ( 
        <View style={styles.container}> 
            {isLoading ? 
                <View style={styles.loadingView}> 
                    <Text style={styles.loadingText}> 
                        LOADING ...
                    </Text>
                </View> :
                questions && (
                <> 
                    <View style={styles.top}>
                        <Text style={styles.question}>
                            Q. {decodeURIComponent(questions[ques].question)}
                        </Text>
                    </View> 
                
                    <View style={styles.options}>
                        <TouchableOpacity 
                        onPress={() => handSelectedOption(options[0])}
                        style={styles.optionButton}>
                            <Text style={styles.option}>
                                {decodeURIComponent(options[0])}
                            </Text>
                        </TouchableOpacity>
                
                        <TouchableOpacity 
                        onPress={() => handSelectedOption(options[1])}
                        style={styles.optionButton}>
                            <Text style={styles.option}>
                                {decodeURIComponent(options[1])}
                            </Text>
                        </TouchableOpacity>
                
                        <TouchableOpacity 
                        onPress={() => handSelectedOption(options[2])}
                        style={styles.optionButton}>
                            <Text style={styles.option}>
                                {decodeURIComponent(options[2])}
                            </Text>
                        </TouchableOpacity>
                
                        <TouchableOpacity 
                        onPress={() => handSelectedOption(options[3])}
                        style={styles.optionButton}>
                            <Text style={styles.option}>
                                {decodeURIComponent(options[3])}
                            </Text>
                        </TouchableOpacity>
                    </View> 
                
                    <View style={styles.bottom}>
                        {/* <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>
                                PREV
                            </Text>
                        </TouchableOpacity> */}
                
                        {ques !== 9 && 
                            <TouchableOpacity 
                            style={styles.button} 
                            onPress={handleNextPress}>
                                <Text style={styles.buttonText}>
                                    SKIP
                                </Text>
                            </TouchableOpacity> 
                        } 

                        {ques === 9 && 
                            <TouchableOpacity 
                            style={styles.button} 
                            onPress={handleShowResults}>
                                <Text style={styles.buttonText}>
                                    SHOW RESULTS
                                </Text>
                            </TouchableOpacity> 
                        }
                    </View> 
                </> 
            )}    
        </View>
    );
}; 

export default Quiz; 

const styles = StyleSheet.create({ 
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
