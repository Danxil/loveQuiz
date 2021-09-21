import React from 'react';
import {Text} from 'react-native';
import {createSlice} from '@reduxjs/toolkit';
import i18next from 'i18next';

const initialState = {
  online: [
    {
      id: 16,
      title: i18next.t('tasks.16.title'),
      text: i18next.t('tasks.16.text'),
      description: i18next.t('tasks.16.description'),
      complexity: 1,
      quizId: 'task_1',
    },
  ],
  offline: [
    {
      id: 1,
      title: i18next.t('tasks.1.title'),
      text: i18next.t('tasks.1.text'),
      description: i18next.t('tasks.1.description'),
      complexity: 0,
      quizId: 'task_1',
    },
    {
      id: 2,
      title: i18next.t('tasks.2.title'),
      text: i18next.t('tasks.2.text'),
      description: i18next.t('tasks.2.description'),
      complexity: 0,
      quizId: 'task_1',
    },
    {
      id: 3,
      title: i18next.t('tasks.3.title'),
      text: i18next.t('tasks.3.text'),
      description: i18next.t('tasks.3.description'),
      complexity: 0,
      quizId: 'task_1',
    },
    {
      id: 4,
      title: i18next.t('tasks.4.title'),
      text: i18next.t('tasks.4.text'),
      description: i18next.t('tasks.4.description'),
      complexity: 1,
      quizId: 'task_1',
    },
    {
      id: 5,
      title: i18next.t('tasks.5.title'),
      text: i18next.t('tasks.5.text'),
      description: i18next.t('tasks.5.description'),
      complexity: 1,
      quizId: 'task_1',
    },
    {
      id: 6,
      title: i18next.t('tasks.6.title'),
      text: i18next.t('tasks.6.text'),
      description: i18next.t('tasks.6.description'),
      complexity: 2,
      quizId: 'task_1',
    },
    {
      id: 7,
      title: i18next.t('tasks.7.title'),
      text: i18next.t('tasks.7.text'),
      description: i18next.t('tasks.7.description'),
      complexity: 2,
      quizId: 'task_1',
    },
    {
      id: 8,
      title: i18next.t('tasks.8.title'),
      text: i18next.t('tasks.8.text'),
      description: i18next.t('tasks.8.description'),
      complexity: 2,
      quizId: 'task_1',
    },
    {
      id: 9,
      title: i18next.t('tasks.9.title'),
      text: i18next.t('tasks.9.text'),
      description: i18next.t('tasks.9.description'),
      complexity: 2,
      quizId: 'task_1',
    },
    {
      id: 10,
      title: i18next.t('tasks.10.title'),
      text: i18next.t('tasks.10.text'),
      description: i18next.t('tasks.10.description'),
      complexity: 2,
      quizId: 'task_1',
    },
    {
      id: 11,
      title: i18next.t('tasks.11.title'),
      text: i18next.t('tasks.11.text'),
      description: i18next.t('tasks.11.description'),
      complexity: 4,
      quizId: 'task_1',
    },
    {
      id: 12,
      title: i18next.t('tasks.12.title'),
      text: i18next.t('tasks.12.text'),
      description: i18next.t('tasks.12.description'),
      complexity: 3,
      quizId: 'task_1',
    },
    {
      id: 13,
      title: i18next.t('tasks.13.title'),
      text: i18next.t('tasks.13.text'),
      description: i18next.t('tasks.13.description'),
      complexity: 3,
      quizId: 'task_1',
    },
    {
      id: 14,
      title: i18next.t('tasks.14.title'),
      text: i18next.t('tasks.14.text'),
      description: i18next.t('tasks.14.description'),
      complexity: 3,
      quizId: 'task_1',
    },
    {
      id: 15,
      title: i18next.t('tasks.15.title'),
      text: i18next.t('tasks.15.text'),
      description: i18next.t('tasks.15.description'),
      complexity: 4,
      quizId: 'task_1',
    },
  ],
};

export const slice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
});

export const {} = slice.actions;

export default slice.reducer;
