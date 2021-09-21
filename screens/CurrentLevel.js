import React from 'react';
import {Text} from 'react-native';
import QuizPreview from './QuizPreview';
import {useTranslation} from 'react-i18next';

const CurrentLevel = props => {
  const {t} = useTranslation();
  return (
    <QuizPreview
      {...props}
      title={t('currentLevel.title')}
      text={t('currentLevel.text')}
      btnLabel={t('currentLevel.btnLabel')}
      onDone={() => props.navigation.navigate('CurrentLevel2')}
    />
  );
};

export default CurrentLevel;
