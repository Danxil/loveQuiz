import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {getComplexity} from '../helpers';
import Btn from './Btn';
import {
  SafeAreaView,
  ImageBackground,
  Text,
  View,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';
import {COLORS} from '../constants';
import {useTranslation} from 'react-i18next';

const Task = ({
  title,
  text,
  complexity,
  onClose,
  onComplete,
  quizId,
  id,
  completed,
  online,
}) => {
  const {t} = useTranslation();
  return (
    <ImageBackground
      source={require('../assets/images/bg2.jpg')}
      style={{
        position: 'relative',
        flex: 1,
        paddingTop: 20,
      }}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#00000050',
        }}
      />
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
          }}>
          <Pressable style={{alignSelf: 'flex-end'}} onPress={onClose}>
            <MaterialCommunityIcons name="close" size={50} color="#fff" />
          </Pressable>
          <View
            style={{marginTop: 25, flex: 1, justifyContent: 'space-between'}}>
            <View style={{width: '100%', alignItems: 'center'}}>
              <Text style={{fontSize: 25, color: 'white'}}>{title}</Text>
              <Text style={{fontSize: 15, color: 'white', marginTop: 20}}>
                {t('taskItemComplexityLabel')}: {getComplexity(complexity)}
              </Text>
              {completed && (
                <Text style={{color: COLORS.success, marginTop: 50}}>
                  {t('taskItemComplexityLabel')}
                </Text>
              )}
            </View>
            <ScrollView
              style={{marginTop: 50}}
              contentContainerStyle={{alignItems: 'center'}}>
              <Text style={{fontSize: 20, color: 'white'}}>{text}</Text>
              {!completed && !online && (
                <Btn onPress={() => onComplete({quizId, taskId: id})}>
                  {t('completeTask')}
                </Btn>
              )}
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({});

export default Task;
