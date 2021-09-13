
import React from 'react';
import { Text } from 'react-native';
import QuizPreview from './QuizPreview';

const CurrentLevel2 = (props) => {
  return (
    <QuizPreview
      {...props}
      title="Твой текущий уровень"
      text={<Text>Для начала, давай определим твой текущий уровень {'\n'}{'\n'} Ответь на несколько вопросов...</Text>}
      btnLabel="Пройти опрос"
      onDone={() => props.navigation.navigate('Quiz', { quizId: 'startQuiz' })}
    />
  );
};


export default CurrentLevel2;