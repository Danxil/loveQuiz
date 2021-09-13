
import React from 'react';
import { Text } from 'react-native';
import QuizPreview from './QuizPreview';

const CurrentLevel = (props) => {
  return (
    <QuizPreview
      {...props}
      title="Психологический портрет"
      text={<Text>На его основе мы узнаем твои слабые стороны{'\n'}{'\n'}Нейронная сеть сгенерирует план развития и по мере твоего роста будет корректировать его</Text>}
      btnLabel="Далее"
      onDone={() => props.navigation.navigate('CurrentLevel2')}
    />
  );
};


export default CurrentLevel;
