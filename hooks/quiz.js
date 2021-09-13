import {useDispatch} from 'react-redux';
import { improveSkill, worsenSkill } from '../slice/user';

export const useProcessAnswer = () => {
  const dispatch = useDispatch();

  return {
    processAnswer: result => {
      result.forEach(item => {
        if (item.target.type === 'skill') {
          if (item.action.type === 'increase') {
            dispatch(
              improveSkill({id: item.target.id, amount: item.action.amount}),
            );
          } else {
            dispatch(
              worsenSkill({id: item.target.id, amount: item.action.amount}),
            );
          }
        }
      });
    },
  };
};
