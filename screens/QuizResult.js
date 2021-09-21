import React, {useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {COLORS} from '../constants';
import Btn from './Btn';
import {useTranslation} from 'react-i18next';

const QuizResult = ({
  navigation,
  route: {
    params: {text, recommendation, title},
  },
}) => {
  const {t} = useTranslation();

  useEffect(async () => {
    await AsyncStorage.setItem('FirstVisit', 'false');
  }, []);

  const onDone = () => {
    navigation.navigate('Profile');
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#000',
      }}>
      <ImageBackground
        style={{
          position: 'relative',
          flex: 1,
          justifyContent: 'space-evenly',
          paddingHorizontal: 20,
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
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 35,
          }}>
          {title}
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            marginTop: 50,
          }}>
          {text}
        </Text>
        <View
          style={{
            backgroundColor: COLORS.white,
            width: '95%',
            borderRadius: 20,
            padding: 20,
            paddingVertical: 10,
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            {t('quizResult.recommendations')}
          </Text>
          <ScrollView
            style={{
              maxHeight: 100,
              marginTop: 20,
              marginBottom: 10,
            }}
            contentContainerStyle={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 15,
                color: COLORS.black,
              }}>
              {recommendation}
            </Text>
          </ScrollView>
          {/* Retry Quiz button */}
        </View>
        <Btn onPress={onDone}>{t('quizResult.btnText')}</Btn>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default QuizResult;
