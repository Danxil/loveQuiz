import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Animated,
  ImageBackground,
  ScrollView,
} from 'react-native';
import Option from './Option';
import Btn from './Btn';
import {useProcessAnswer} from '../hooks/quiz';
import {COLORS} from '../constants';

const Quiz = ({
  navigation,
  route: {
    params: {quizId, taskId},
  },
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);

  const data = useSelector(state => state.quizzes[quizId]);

  const allQuestions = data.questions;
  const [progress, setProgress] = useState(new Animated.Value(0));
  const progressAnim = progress.interpolate({
    inputRange: [0, allQuestions.length],
    outputRange: ['0%', '100%'],
  });

  const {processAnswer} = useProcessAnswer();

  const validateAnswer = selectedOption => {
    setCurrentOptionSelected(selectedOption);
    setIsOptionsDisabled(true);
    setShowNextButton(true);
  };

  const isAbleToCompleteTask = resultItem => {
    if (!resultItem.result) {
      return null;
    }

    const valueItem = resultItem.result.find(
      result => result?.target?.type === 'ableToCompleteTask',
    );
    if (!valueItem) {
      return null;
    }

    return valueItem.action.value;
  };

  const getResult = answers => {
    if (data.type === 'answers_amount') {
      const answersAmount = answers.reduce(
        (prev, next) => ({...prev, [next.score]: (prev[next.score] || 0) + 1}),
        {},
      );
      const biggestValue = Math.max.apply(null, Object.values(answersAmount));
      const key = Object.keys(answersAmount).find(
        key => answersAmount[key] === biggestValue,
      );
      return data.results[key];
    }

    return '';
  };

  const handleNext = () => {
    const newAnswers = [...answers, currentOptionSelected];
    setAnswers(newAnswers);

    if (currentQuestionIndex == allQuestions.length - 1) {
      answers.forEach(answer => {
        answer.result && answer.result.length && processAnswer(answer.result);
      });

      const result = getResult(newAnswers);
      setAnswers([]);
      setCurrentQuestionIndex(0);
      setProgress(new Animated.Value(0));
      setCurrentOptionSelected(null);
      setIsOptionsDisabled(false);
      setShowNextButton(false);

      if (quizId === 'startQuiz') {
        navigation.navigate('QuizResult', {
          recommendation: result.text,
          text: data.quizResultDescription,
          title: data.quizResultTitle,
        });
      } else {
        const ableToCompleteTask = isAbleToCompleteTask(result);
        navigation.navigate('TaskQuizResult', {
          text: result.text,
          taskId,
          title: 'Завершай задание только, если действительно выполнил его',
          ableToComplete: ableToCompleteTask,
        });
      }
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentOptionSelected(null);
      setIsOptionsDisabled(false);
      setShowNextButton(false);
    }
    Animated.timing(progress, {
      toValue: currentQuestionIndex + 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const renderQuestion = () => {
    return (
      <View
        style={{
          marginVertical: 40,
        }}>
        {allQuestions.length > 1 && (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}>
            <Text
              style={{
                color: COLORS.white,
                fontSize: 20,
                opacity: 0.6,
                marginRight: 2,
              }}>
              {currentQuestionIndex + 1}
            </Text>
            <Text style={{color: COLORS.white, fontSize: 18, opacity: 0.6}}>
              / {allQuestions.length}
            </Text>
          </View>
        )}
        <Text
          style={{
            color: COLORS.white,
            fontSize: 30,
          }}>
          {allQuestions[currentQuestionIndex]?.question}
        </Text>
      </View>
    );
  };
  const renderOptions = () => {
    return (
      <View>
        {allQuestions[currentQuestionIndex]?.options.map(option => (
          <Option
            onPress={() => validateAnswer(option)}
            isOptionsDisabled={isOptionsDisabled}
            key={option.text}
            text={option.text}
            isSelected={currentOptionSelected?.text === option.text}
          />
        ))}
      </View>
    );
  };
  const renderNextButton = () => {
    if (showNextButton) {
      return <Btn onPress={handleNext}>Далее</Btn>;
    } else {
      return null;
    }
  };

  const renderProgressBar = () => {
    return (
      <View
        style={{
          width: '100%',
          height: 20,
          borderRadius: 20,
          backgroundColor: '#00000020',
        }}>
        <Animated.View
          style={[
            {
              height: 20,
              borderRadius: 20,
              backgroundColor: COLORS.accent,
            },
            {
              width: progressAnim,
            },
          ]}
        />
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'black',
      }}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
      <ImageBackground
        source={require('../assets/images/bg2.jpg')}
        style={{
          position: 'relative',
          flex: 1,

          paddingHorizontal: 16,
        }}>
        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: '#00000090',
          }}
        />
        <ScrollView contentContainerStyle={{paddingVertical: 40}}>
          {renderProgressBar()}
          {renderQuestion()}
          {renderOptions()}
          {renderNextButton()}
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Quiz;
