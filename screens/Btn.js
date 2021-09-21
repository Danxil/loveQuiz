import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS} from '../constants';

const Btn = ({
  onPress,
  children,
  size = 'default',
  type = 'default',
  disabled = false,
  style = {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={{
        ...styles.btn,
        ...styles[`${size}Btn`],
        ...(type === 'success' ? styles.selected : {}),
        ...style,
      }}>
      <Text style={{...styles.text, ...styles[`${size}BtnText`]}}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Btn;

const styles = StyleSheet.create({
  skillLabel: {},
  btn: {
    marginTop: 20,
    width: '100%',
    borderWidth: 1,
    borderColor: COLORS.accent,
    backgroundColor: COLORS.accent + '20',
    padding: 10,
    borderRadius: 5,
  },
  selected: {
    backgroundColor: COLORS.success + '30',
    borderColor: COLORS.success,
  },
  text: {
    fontSize: 20,
    color: COLORS.white,
    textAlign: 'center',
  },
  smallBtn: {
    padding: 10,
    marginTop: 5,
  },
  smallBtnText: {
    fontSize: 12,
  },
  defaultBtnText: {
    padding: 10,
  },
  defaultBtn: {},
});
