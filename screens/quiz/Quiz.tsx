/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */

import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Questions from '../../models/Questions';
import quizStyles from './Style';

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
        <View style={quizStyles.container}> 
            {isLoading ? 
                <View style={quizStyles.loadingView}> 
                    <Text style={quizStyles.loadingText}> 
                        LOADING ...
                    </Text>
                </View> :
                questions && (
                <> 
                    <View style={quizStyles.top}>
                        <Text style={quizStyles.question}>
                            Q. {decodeURIComponent(questions[ques].question)}
                        </Text>
                    </View> 
                
                    <View style={quizStyles.options}>
                        <TouchableOpacity 
                        onPress={() => handSelectedOption(options[0])}
                        style={quizStyles.optionButton}>
                            <Text style={quizStyles.option}>
                                {decodeURIComponent(options[0])}
                            </Text>
                        </TouchableOpacity>
                
                        <TouchableOpacity 
                        onPress={() => handSelectedOption(options[1])}
                        style={quizStyles.optionButton}>
                            <Text style={quizStyles.option}>
                                {decodeURIComponent(options[1])}
                            </Text>
                        </TouchableOpacity>
                
                        <TouchableOpacity 
                        onPress={() => handSelectedOption(options[2])}
                        style={quizStyles.optionButton}>
                            <Text style={quizStyles.option}>
                                {decodeURIComponent(options[2])}
                            </Text>
                        </TouchableOpacity>
                
                        <TouchableOpacity 
                        onPress={() => handSelectedOption(options[3])}
                        style={quizStyles.optionButton}>
                            <Text style={quizStyles.option}>
                                {decodeURIComponent(options[3])}
                            </Text>
                        </TouchableOpacity>
                    </View> 
                
                    <View style={quizStyles.bottom}>
                        {/* <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>
                                PREV
                            </Text>
                        </TouchableOpacity> */}
                
                        {ques !== 9 && 
                            <TouchableOpacity 
                            style={quizStyles.button} 
                            onPress={handleNextPress}>
                                <Text style={quizStyles.buttonText}>
                                    SKIP
                                </Text>
                            </TouchableOpacity> 
                        } 

                        {ques === 9 && 
                            <TouchableOpacity 
                            style={quizStyles.button} 
                            onPress={handleShowResults}>
                                <Text style={quizStyles.buttonText}>
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


