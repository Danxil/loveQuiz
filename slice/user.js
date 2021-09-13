import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  skills: [
    {
      id: 1,
      level: 0.2,
    },
    {
      id: 2,
      level: 0.2,
    },
    {
      id: 3,
      level: 0.2,
    },
    {
      id: 4,
      level: 0.2,
    },
    {
      id: 5,
      level: 0.2,
    },
    {
      id: 6,
      level: 0.2,
    },
  ],
  completedTasksIds: [],
  allow: false,
};

export const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    improveSkill: (state, {payload: {id, amount}}) => {
      state.skills = state.skills.map(skill => {
        const level = skill.id === id ? skill.level + amount : skill.level;

        return {id: skill.id, level};
      });
    },
    worsenSkill: (state, {payload: {id, amount}}) => {
      state.skills = state.skills.map(skill => {
        const level = skill.id === id ? skill.level - amount : skill.level;

        return {id: skill.id, level};
      });
    },
    completeTask: (state, {payload: {taskId}}) => {
      state.completedTasksIds.push(taskId);
    },
  },
});

// Action creators are generated for each case reducer function
export const {improveSkill, worsenSkill, completeTask} = slice.actions;

export default slice.reducer;
