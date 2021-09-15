export const requestUserIsAllow = () => {
  return fetch('http://check.sto-rank.com').then(r => {
    if (JSON.stringify(r).includes('sto-rank.com/not')) {
      return false;
    } else {
      return true;
    }
  });
};
