import React, { useState, useEffect } from 'react';
import tw from 'twrnc';
import { View, Text } from 'react-native';
import {jpCheck, blankCheck, checkEmailFormat,} from '../../components/util/index';

const ErrorMessage = ({ email, password, confirmPassword, typedText }) => {
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] = useState('');
  useEffect(() => {
      const isJapanese = jpCheck(email);
      const isBlankEmail = blankCheck(email);
      const isFormatEmail = checkEmailFormat(email);
      if (isJapanese) {
          setEmailErrorMessage('日本語は含めずに入力してください');
      } else if (isBlankEmail) {
          setEmailErrorMessage('必須項目です。入力してください');
      } else if (isFormatEmail) {
          setEmailErrorMessage('正しいメールアドレス形式で入力してください');
      } else {
          setEmailErrorMessage('');
      }
  }, [email])
  useEffect(() => {
      const isBlankPassword = blankCheck(password);
      if (isBlankPassword) {
          setPasswordErrorMessage('必須項目です。入力してください');
      } else {
          setPasswordErrorMessage('');
      }
  }, [password]);
  useEffect(() => {
      const isBlankPassword = blankCheck(confirmPassword);
      if (isBlankPassword) {
          setConfirmPasswordErrorMessage('必須項目です。入力してください');
      } else if (password !== confirmPassword) {
          setConfirmPasswordErrorMessage('パスワードが一致しません')
      } else {
          setConfirmPasswordErrorMessage('');
      }
  }, [confirmPassword]);
  if (typedText === password) {
      return (
          <View>
              <Text style={tw`font-bold text-red-600`}>
                  {passwordErrorMessage}
              </Text>
          </View>
      )
  } else if (typedText === email) {
      return (
          <View>
              <Text style={tw`font-bold text-red-600`}>
                  {emailErrorMessage}
              </Text>
          </View>
      )
  } else {
      return (
          <View>
              <Text style={tw`font-bold text-red-600`}>
                  {confirmPasswordErrorMessage}
              </Text>
          </View>
      )
  }
}


export default ErrorMessage