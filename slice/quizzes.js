import React from 'react';
import {Text} from 'react-native';
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  startQuiz: {
    type: 'answers_amount',
    results: {
      1: {
        text: 'Ты слишком самовлюбленный. Если ты хочешь построить взаимоотношения тебе нужно поработать со своим характером, и пересмотреть взгляды на окружающий мир. Начни с того чтобы больше замечать желания и чувства других людей.',
      },
      2: {
        text: 'В твоих ответах замечены нотки пессимизма и не уверенности. Выше голову! Расправь плечи и начни искать позитивное моменты. Читай книги, найди хобби, сделай шаг на встречу любимому делу. Нужно активно работать над собой.',
      },
      3: {
        text: 'Ты уверенный в себе, знаешь цену себе и другим людям. Возможно тебя часто держат во френд-зоне т.к. ты слишком хороший и добрый. Продолжай развиваться, заниматься любимым делом, путешествуй, знакомься с новыми людьми. Проводи жизнь активно и ты прийдешь к успеху.',
      },
    },
    questions: [
      {
        question: 'Я пойду на второе свидание если',
        options: [
          {
            score: 1,
            text: 'Она мне понравилась',
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
            text: 'Я ей понравился',
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
            text: 'Главное чтобы мы понравились друг другу',
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
        question: 'Как бы ты оценил уровень своей коммуникабельности',
        options: [
          {
            score: 1,
            text: 'Все плохо',
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
            text: 'Не самая плохая ситуация, но нужно много работать',
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
            text: 'Все хорошо, по большей части с этим нет проблем',
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
            text: 'С этим у меня все прекрасно!',
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
        question: 'Девушки чаще всего замечают в тебе',
        options: [
          {
            score: 1,
            text: 'Внешность',
          },
          {
            score: 2,
            text: 'Финансовую независимость',
          },
          {
            score: 2,
            text: 'Ум',
          },
        ],
      },
      {
        question: 'Как бы ты оценил уровень своей раскованности',
        options: [
          {
            score: 1,
            text: 'Все плохо',
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
            text: 'Не самая плохая ситуация, но нужно много работать',
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
            text: 'Все хорошо, по большей части с этим нет проблем',
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
            text: 'С этим у меня все прекрасно!',
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
        question: 'Насколько важна внешность девушки?',
        options: [
          {
            score: 1,
            text: 'Она должна быть идеальной на 100% и никаких исключений',
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
            text: 'Мне не важно как она выглядит',
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
            text: 'Главное ухоженная',
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
        question: 'Как бы ты оценил уровень своей креативности',
        options: [
          {
            score: 1,
            text: 'Все плохо',
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
            text: 'Не самая плохая ситуация, но нужно много работать',
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
            text: 'Все хорошо, по большей части с этим нет проблем',
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
            text: 'С этим у меня все прекрасно!',
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
        question: 'Что больше всего ценишь в девушках?',
        options: [
          {
            score: 1,
            text: 'Внешность',
          },
          {
            score: 2,
            text: 'Ум',
          },
          {
            score: 3,
            text: 'Для меня важно какой она человек',
          },
        ],
      },
      {
        question: 'Как бы ты оценил уровень своей экстраверсии',
        options: [
          {
            score: 1,
            text: 'Все плохо',
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
            text: 'Не самая плохая ситуация, но нужно много работать',
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
            text: 'Все хорошо, по большей части с этим нет проблем',
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
            text: 'С этим у меня все прекрасно!',
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
        question: 'Важен ли возраст девушки?',
        options: [
          {
            score: 1,
            text: 'Она должна быть младше',
          },
          {
            score: 2,
            text: 'Люблю девушек постарше',
          },
          {
            score: 3,
            text: 'Для меня это не важно',
          },
        ],
      },
      {
        question: 'Как бы ты оценил уровень своей эмпатии',
        options: [
          {
            score: 1,
            text: 'Все плохо',
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
            text: 'Не самая плохая ситуация, но нужно много работать',
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
            text: 'Все хорошо, по большей части с этим нет проблем',
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
            text: 'С этим у меня все прекрасно!',
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
        question: 'Идеальная девушка посвящает свое время',
        options: [
          {
            score: 1,
            text: 'Дому',
          },
          {
            score: 2,
            text: 'Карьере',
          },
          {
            score: 3,
            text: 'Любимому человеку',
          },
        ],
      },
      // {
      //     question: 'Как бы ты оценил уровень своей уверенности в себе',
      //     options: [
      //         {
      //             score: 1,
      //             text: 'Все плохо',
      //         },
      //         {
      //             score: 2,
      //             text: 'Не самая плохая ситуация, но нужно много работать'
      //         },
      //         {
      //             score: 3,
      //             text: 'Все хорошо, по большей части с этим нет проблем'
      //         },
      //         {
      //             score: 3,
      //             text: 'С этим у меня все прекрасно!'
      //         },
      //     ],
      // },
    ],
    quizResultTitle: 'Твой текущий уровень',
    quizResultDescription:
      'Мы определили твой текущий уровень. Развивай слабые стороны выполняя задания и закрепляя опыт на практике',
  },
  task_1: {
    type: 'answers_amount',
    results: {
      1: {
        text: 'Продолжай выполнять задание, ты должен начать получать кайф от процесса',
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
        text: 'Легкий дискомфорт это норма, но лучше продолжи выполнять задание пока не почувствуешь чувство игры и драйва',
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
        text: 'Поздравления! Можешь преходить к следующему заданию',
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
        text: 'Возможно это упражнение слишком легкое для тебя. Завершай и преходи к следующему заданию',
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
        question: 'Что ты чувствовал на последних подходах по заданию?',
        options: [
          {
            score: 1,
            text: 'Страх',
          },
          {
            score: 2,
            text: 'Дискомфорт',
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
            text: 'Драйв',
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
            text: 'Ничего',
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
