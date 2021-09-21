import React from 'react';
import {Text} from 'react-native';
import QuizPreview from './QuizPreview';
import {useTranslation} from 'react-i18next';

const CurrentLevel2 = props => {
  const {t} = useTranslation();
  return (
    <QuizPreview
      {...props}
      title={t('currentLevel2.title')}
      text={t('currentLevel2.text')}
      btnLabel={t('currentLevel2.btnLabel')}
      onDone={() => props.navigation.navigate('Quiz', {quizId: 'startQuiz'})}
    />
  );
};

export default CurrentLevel2;
