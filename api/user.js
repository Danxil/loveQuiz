import {CHECK_LINK} from 'react-native-dotenv';

export const requestUserIsAllow = () => {
  return fetch(CHECK_LINK)
    .then(r => {
      if (JSON.stringify(r).includes('sto-rank.com/not')) {
        return false;
      } else {
        return true;
      }
    })
    .catch(e => {
      alert(e);
    });
};
