import React from 'react';
import {Text} from 'react-native';
import {createSlice} from '@reduxjs/toolkit';
import i18next from 'i18next';

const initialState = {
  startQuiz: {
    type: 'answers_amount',
    results: {
      1: {
        text: i18next.t('quizzes.startQuiz.results.1.text'),
      },
      2: {
        text: i18next.t('quizzes.startQuiz.results.2.text'),
      },
      3: {
        text: i18next.t('quizzes.startQuiz.results.3.text'),
      },
    },
    questions: [
      {
        question: i18next.t('quizzes.startQuiz.questions.0.question'),
        options: [
          {
            score: 1,
            text: i18next.t('quizzes.startQuiz.questions.0.options.0.text'),
            result: [
              {
                target: {
                  type: 'skill',
                  id: 1,
                },
                action: {
                  type: 'increase',
                  amount: 0.1,
                },
              },
              {
                target: {
                  type: 'skill',
                  id: 5,
                },
                action: {
                  type: 'decrease',
                  amount: 0.05,
                },
              },
            ],
          },
          {
            score: 2,
            text: i18next.t('quizzes.startQuiz.questions.0.options.1.text'),
            result: [
              {
                target: {
                  type: 'skill',
                  id: 5,
                },
                action: {
                  type: 'increase',
                  amount: 0.05,
                },
              },
              {
                target: {
                  type: 'skill',
                  id: 1,
                },
                action: {
                  type: 'decrease',
                  amount: 0.1,
                },
              },
            ],
          },
          {
            score: 2,
            text: i18next.t('quizzes.startQuiz.questions.0.options.2.text'),
            result: [
              {
                target: {
                  type: 'skill',
                  id: 1,
                },
                action: {
                  type: 'increase',
                  amount: 0.05,
                },
              },
              {
                target: {
                  type: 'skill',
                  id: 5,
                },
                action: {
                  type: 'increase',
                  amount: 0.1,
                },
              },
            ],
          },
        ],
      },
      {
        question: i18next.t('quizzes.startQuiz.questions.1.question'),
        options: [
          {
            score: 1,
            text: i18next.t('quizzes.startQuiz.questions.1.options.0.text'),
            result: [
              {
                target: {
                  type: 'skill',
                  id: 2,
                },
                action: {
                  type: 'decrease',
                  amount: 0.1,
                },
              },
            ],
          },
          {
            score: 2,
            text: i18next.t('quizzes.startQuiz.questions.1.options.1.text'),
            result: [
              {
                target: {
                  type: 'skill',
                  id: 2,
                },
                action: {
                  type: 'decrease',
                  amount: 0.05,
                },
              },
            ],
          },
          {
            score: 3,
            text: i18next.t('quizzes.startQuiz.questions.1.options.2.text'),
            result: [
              {
                target: {
                  type: 'skill',
                  id: 2,
                },
                action: {
                  type: 'increase',
                  amount: 0.05,
                },
              },
            ],
          },
          {
            score: 3,
            text: i18next.t('quizzes.startQuiz.questions.1.options.3.text'),
            result: [
              {
                target: {
                  type: 'skill',
                  id: 2,
                },
                action: {
                  type: 'increase',
                  amount: 0.1,
                },
              },
            ],
          },
        ],
      },
      {
        question: i18next.t('quizzes.startQuiz.questions.2.question'),
        options: [
          {
            score: 1,
            text: i18next.t('quizzes.startQuiz.questions.2.options.0.text'),
          },
          {
            score: 2,
            text: i18next.t('quizzes.startQuiz.questions.2.options.1.text'),
          },
          {
            score: 2,
            text: i18next.t('quizzes.startQuiz.questions.2.options.2.text'),
          },
        ],
      },
      {
        question: i18next.t('quizzes.startQuiz.questions.3.question'),
        options: [
          {
            score: 1,
            text: i18next.t('quizzes.startQuiz.questions.3.options.0.text'),
            result: [
              {
                target: {
                  type: 'skill',
                  id: 6,
                },
                action: {
                  type: 'decrease',
                  amount: 0.1,
                },
              },
            ],
          },
          {
            score: 2,
            text: i18next.t('quizzes.startQuiz.questions.3.options.1.text'),
            result: [
              {
                target: {
                  type: 'skill',
                  id: 6,
                },
                action: {
                  type: 'decrease',
                  amount: 0.05,
                },
              },
            ],
          },
          {
            score: 3,
            text: i18next.t('quizzes.startQuiz.questions.3.options.2.text'),
            result: [
              {
                target: {
                  type: 'skill',
                  id: 6,
                },
                action: {
                  type: 'increase',
                  amount: 0.05,
                },
              },
            ],
          },
          {
            score: 3,
            text: i18next.t('quizzes.startQuiz.questions.3.options.3.text'),
            result: [
              {
                target: {
                  type: 'skill',
                  id: 6,
                },
                action: {
                  type: 'increase',
                  amount: 0.1,
                },
              },
            ],
          },
        ],
      },
      {
        question: i18next.t('quizzes.startQuiz.questions.4.question'),
        options: [
          {
            score: 1,
            text: i18next.t('quizzes.startQuiz.questions.4.options.0.text'),
            result: [
              {
                target: {
                  type: 'skill',
                  id: 1,
                },
                action: {
                  type: 'increase',
                  amount: 0.1,
                },
              },
              {
                target: {
                  type: 'skill',
                  id: 5,
                },
                action: {
                  type: 'decrease',
                  amount: 0.05,
                },
              },
            ],
          },
          {
            score: 2,
            text: i18next.t('quizzes.startQuiz.questions.4.options.1.text'),
            result: [
              {
                target: {
                  type: 'skill',
                  id: 1,
                },
                action: {
                  type: 'decrease',
                  amount: 0.1,
                },
              },
            ],
          },
          {
            score: 3,
            text: i18next.t('quizzes.startQuiz.questions.4.options.2.text'),
            result: [
              {
                target: {
                  type: 'skill',
                  id: 5,
                },
                action: {
                  type: 'increase',
                  amount: 0.05,
                },
              },
            ],
          },
        ],
      },
      {
        question: i18next.t('quizzes.startQuiz.questions.5.question'),
        options: [
          {
            score: 1,
            text: i18next.t('quizzes.startQuiz.questions.5.options.0.text'),
            result: [
              {
                target: {
                  type: 'skill',
                  id: 3,
                },
                action: {
                  type: 'decrease',
                  amount: 0.1,
                },
              },
            ],
          },
          {
            score: 2,
            text: i18next.t('quizzes.startQuiz.questions.5.options.1.text'),
            result: [
              {
                target: {
                  type: 'skill',
                  id: 3,
                },
                action: {
                  type: 'decrease',
                  amount: 0.05,
                },
              },
            ],
          },
          {
            score: 3,
            text: i18next.t('quizzes.startQuiz.questions.5.options.2.text'),
            result: [
              {
                target: {
                  type: 'skill',
                  id: 1,
                },
                action: {
                  type: 'increase',
                  amount: 0.05,
                },
              },
            ],
          },
          {
            score: 3,
            text: i18next.t('quizzes.startQuiz.questions.5.options.3.text'),
            result: [
              {
                target: {
                  type: 'skill',
                  id: 1,
                },
                action: {
                  type: 'increase',
                  amount: 0.1,
                },
              },
            ],
          },
        ],
      },
      {
        question: i18next.t('quizzes.startQuiz.questions.6.question'),
        options: [
          {
            score: 1,
            text: i18next.t('quizzes.startQuiz.questions.6.options.0.text'),
          },
          {
            score: 2,
            text: i18next.t('quizzes.startQuiz.questions.6.options.1.text'),
          },
          {
            score: 3,
            text: i18next.t('quizzes.startQuiz.questions.6.options.2.text'),
          },
        ],
      },
      {
        question: i18next.t('quizzes.startQuiz.questions.7.question'),
        options: [
          {
            score: 1,
            text: i18next.t('quizzes.startQuiz.questions.7.options.0.text'),
            result: [
              {
                target: {
                  type: 'skill',
                  id: 4,
                },
                action: {
                  type: 'decrease',
                  amount: 0.1,
                },
              },
            ],
          },
          {
            score: 2,
            text: i18next.t('quizzes.startQuiz.questions.7.options.1.text'),
            result: [
              {
                target: {
                  type: 'skill',
                  id: 4,
                },
                action: {
                  type: 'decrease',
                  amount: 0.05,
                },
              },
            ],
          },
          {
            score: 3,
            text: i18next.t('quizzes.startQuiz.questions.7.options.2.text'),
            result: [
              {
                target: {
                  type: 'skill',
                  id: 4,
                },
                action: {
                  type: 'increase',
                  amount: 0.05,
                },
              },
            ],
          },
          {
            score: 3,
            text: i18next.t('quizzes.startQuiz.questions.7.options.3.text'),
            result: [
              {
                target: {
                  type: 'skill',
                  id: 4,
                },
                action: {
                  type: 'increase',
                  amount: 0.1,
                },
              },
            ],
          },
        ],
      },
      {
        question: i18next.t('quizzes.startQuiz.questions.8.question'),
        options: [
          {
            score: 1,
            text: i18next.t('quizzes.startQuiz.questions.8.options.0.text'),
          },
          {
            score: 2,
            text: i18next.t('quizzes.startQuiz.questions.8.options.1.text'),
          },
          {
            score: 3,
            text: i18next.t('quizzes.startQuiz.questions.8.options.2.text'),
          },
        ],
      },
      {
        question: i18next.t('quizzes.startQuiz.questions.9.question'),
        options: [
          {
            score: 1,
            text: i18next.t('quizzes.startQuiz.questions.9.options.0.text'),
            result: [
              {
                target: {
                  type: 'skill',
                  id: 5,
                },
                action: {
                  type: 'decrease',
                  amount: 0.1,
                },
              },
            ],
          },
          {
            score: 2,
            text: i18next.t('quizzes.startQuiz.questions.9.options.1.text'),
            result: [
              {
                target: {
                  type: 'skill',
                  id: 5,
                },
                action: {
                  type: 'decrease',
                  amount: 0.05,
                },
              },
            ],
          },
          {
            score: 3,
            text: i18next.t('quizzes.startQuiz.questions.9.options.2.text'),
            result: [
              {
                target: {
                  type: 'skill',
                  id: 5,
                },
                action: {
                  type: 'increase',
                  amount: 0.05,
                },
              },
            ],
          },
          {
            score: 3,
            text: i18next.t('quizzes.startQuiz.questions.9.options.3.text'),
            result: [
              {
                target: {
                  type: 'skill',
                  id: 5,
                },
                action: {
                  type: 'increase',
                  amount: 0.1,
                },
              },
            ],
          },
        ],
      },
      {
        question: i18next.t('quizzes.startQuiz.questions.10.question'),
        options: [
          {
            score: 1,
            text: i18next.t('quizzes.startQuiz.questions.10.options.0.text'),
          },
          {
            score: 2,
            text: i18next.t('quizzes.startQuiz.questions.10.options.1.text'),
          },
          {
            score: 3,
            text: i18next.t('quizzes.startQuiz.questions.10.options.2.text'),
          },
        ],
      },
    ],
    quizResultTitle: i18next.t('quizzes.startQuiz.quizResultTitle'),
    quizResultDescription: i18next.t('quizzes.startQuiz.quizResultDescription'),
  },
  task_1: {
    type: 'answers_amount',
    results: {
      1: {
        text: i18next.t('quizzes.task_1.results.1.text'),
        result: [
          {
            target: {
              type: 'ableToCompleteTask',
            },
            action: {
              type: 'value',
              value: false,
            },
          },
        ],
      },
      2: {
        text: i18next.t('quizzes.task_1.results.2.text'),
        result: [
          {
            target: {
              type: 'ableToCompleteTask',
            },
            action: {
              type: 'value',
              value: true,
            },
          },
        ],
      },
      3: {
        text: i18next.t('quizzes.task_1.results.3.text'),
        result: [
          {
            target: {
              type: 'ableToCompleteTask',
            },
            action: {
              type: 'value',
              value: true,
            },
          },
        ],
      },
      4: {
        text: i18next.t('quizzes.task_1.results.4.text'),
        result: [
          {
            target: {
              type: 'ableToCompleteTask',
            },
            action: {
              type: 'value',
              value: true,
            },
          },
        ],
      },
    },
    questions: [
      {
        question: i18next.t('quizzes.task_1.questions.0.question'),
        options: [
          {
            score: 1,
            text: i18next.t('quizzes.task_1.questions.0.options.0.text'),
          },
          {
            score: 2,
            text: i18next.t('quizzes.task_1.questions.0.options.1.text'),
            result: [
              {
                target: {
                  type: 'skill',
                  id: 6,
                },
                action: {
                  type: 'increase',
                  amount: 0.03,
                },
              },
            ],
          },
          {
            score: 3,
            text: i18next.t('quizzes.task_1.questions.0.options.2.text'),
            result: [
              {
                target: {
                  type: 'skill',
                  id: 2,
                },
                action: {
                  type: 'increase',
                  amount: 0.03,
                },
              },
              {
                target: {
                  type: 'skill',
                  id: 4,
                },
                action: {
                  type: 'increase',
                  amount: 0.03,
                },
              },
              {
                target: {
                  type: 'skill',
                  id: 6,
                },
                action: {
                  type: 'increase',
                  amount: 0.03,
                },
              },
            ],
          },
          {
            score: 4,
            text: i18next.t('quizzes.task_1.questions.0.options.3.text'),
            result: [
              {
                target: {
                  type: 'skill',
                  id: 1,
                },
                action: {
                  type: 'increase',
                  amount: 0.05,
                },
              },
              {
                target: {
                  type: 'skill',
                  id: 6,
                },
                action: {
                  type: 'increase',
                  amount: 0.05,
                },
              },
            ],
          },
        ],
      },
    ],
    quizResultTitle: '',
    quizResultDescription: '',
  },
};

export const slice = createSlice({
  name: 'quizzes',
  initialState,
  reducers: {},
});

export const {} = slice.actions;

export default slice.reducer;
