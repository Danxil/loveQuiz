import i18next from 'i18next';

export const getComplexity = value => {
  if (value === 0) {
    return i18next.t('profileScreen.complexity.0');
  } else if (value === 1) {
    return i18next.t('profileScreen.complexity.1');
  } else if (value === 2) {
    return i18next.t('profileScreen.complexity.2');
  } else if (value === 3) {
    return i18next.t('profileScreen.complexity.3');
  } else if (value === 4) {
    return i18next.t('profileScreen.complexity.4');
  }
};

export const getSkill = value => {
  if (value === 1) {
    return i18next.t('profileScreen.skills.confidence');
  } else if (value === 2) {
    return i18next.t('profileScreen.skills.communication');
  } else if (value === 3) {
    return i18next.t('profileScreen.skills.creativity');
  } else if (value === 4) {
    return i18next.t('profileScreen.skills.extraversion');
  } else if (value === 5) {
    return i18next.t('profileScreen.skills.empathy');
  } else if (value === 6) {
    return i18next.t('profileScreen.skills.relaxedness');
  }
};
