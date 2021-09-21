import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../constants';

const Option = ({onPress, isOptionsDisabled, text, isSelected}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isOptionsDisabled}
      key={text}
      style={{
        borderWidth: 3,
        borderColor: isSelected ? COLORS.success : COLORS.secondary + '40',
        backgroundColor: isSelected ? COLORS.success + '30' : COLORS.secondary,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10,
      }}>
      <Text style={{fontSize: 20, color: COLORS.white}}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Option;
