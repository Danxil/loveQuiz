import React from 'react';

import {Text, View, StyleSheet} from 'react-native';
import {COLORS} from '../constants';
import Btn from './Btn';
import {getComplexity} from '../helpers';
import {useTranslation} from 'react-i18next';

const TaskItem = ({
  isTaskLocked,
  isTaskCompeted,
  title,
  complexity,
  description,
  openTask,
}) => {
  const {t} = useTranslation();
  return (
    <View
      style={{
        ...styles.task,
        ...(isTaskCompeted ? styles.completedTask : {}),
        ...(isTaskLocked ? styles.lockedTask : {}),
      }}
      key={title}>
      {isTaskCompeted && (
        <Text style={{alignSelf: 'flex-end', color: COLORS.success}}>
          {t('taskCompleted')}
        </Text>
      )}
      {isTaskLocked && (
        <Text style={{alignSelf: 'flex-end', color: COLORS.white}}>
          {t('taskClosed')}
        </Text>
      )}
      <View style={styles.taskLine}>
        <Text style={styles.taskTitleLabel}>
          {t('taskItemTaskLabel')}: <Text style={styles.taskTitle}>{title}</Text>
        </Text>
      </View>
      <View style={styles.taskLine}>
        <Text style={styles.taskTitleLabel}>
          {t('taskItemComplexityLabel')}:{' '}
          <Text style={styles.taskTitle}>{getComplexity(complexity)}</Text>
        </Text>
      </View>
      <View style={styles.taskLine}>
        <Text style={styles.taskTitle}>{description}</Text>
      </View>
      <View style={{...styles.taskLine, marginTop: 10}}>
        <Btn size="small" disabled={isTaskLocked} onPress={openTask}>
          {t('openTask')}
        </Btn>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  skillLabel: {
    color: 'black',
    fontSize: 12,
    marginTop: 10,
  },
  skillBar: {
    marginTop: 5,
  },
  taskTitle: {
    color: 'white',
    fontSize: 12,
  },
  taskTitleLabel: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  taskLine: {
    marginTop: 5,
  },
  task: {
    backgroundColor: '#322e55',
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    paddingBottom: 15,
    borderRadius: 20,
  },
  taskBar: {
    marginTop: 10,
  },
  tasksBlock: {
    backgroundColor: '#24213e',
    padding: 20,
  },
  tasksTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  scrollView: {
    marginTop: 15,
    marginHorizontal: -20,
    maxHeight: 250,
  },
  skillsTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
  },
  additionalText: {
    color: 'white',
    textAlign: 'center',
    width: 300,
    alignSelf: 'center',
    paddingVertical: 30,
  },
  completedTask: {
    borderColor: COLORS.success + '50',
    borderWidth: 1,
    backgroundColor: COLORS.success + '20',
  },
  lockedTask: {
    opacity: 0.3,
  },
});

export default TaskItem;
