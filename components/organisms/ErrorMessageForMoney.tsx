import React, { useState, useEffect } from 'react';
import tw from 'twrnc';
import { View, Text } from 'react-native';
import { blankCheck, blankNumCheck, textLengthCheck } from '../util/index';

const ErrorMessageForMoney = ({ month, title, moneyAccountLabel, amount, memo, typedText, memoMaxLength }) => {
  const [monthErrorMessage, setMonthErrorMessage] = useState("")
  const [titleErrorMessage, setTitleErrorMessage] = useState("")
  const [moneyAccountLabelErrorMessage, setMoneyAccountLabelErrorMessage] = useState("")
  const [amountErrorMessage, setAmountErrorMessage] = useState("")
  const [memoErrorMessage, setMemoErrorMessage] = useState("")

  useEffect(() => {
    const isBlankMonth = blankNumCheck(month)
    if (isBlankMonth) {
        setMonthErrorMessage('必須項目です。入力してください');
    } else {
        setMonthErrorMessage('');
    }
  }, [month])
  useEffect(() => {
    const isBlankTitle = blankCheck(title)
    if (isBlankTitle) {
      setTitleErrorMessage('必須項目です。数値で入力してください');
    } else {
      setTitleErrorMessage('');
    }
  }, [title]);
  useEffect(() => {
    const isBlankMoneyAccountLabel = blankNumCheck(moneyAccountLabel)
    if (isBlankMoneyAccountLabel) {
        setMoneyAccountLabelErrorMessage('必須項目です。入力してください');
    } else {
        setMoneyAccountLabelErrorMessage('');
    }
  }, [moneyAccountLabel]);
  useEffect(() => {
    const isBlankAmount = blankNumCheck(amount)
    if (isBlankAmount) {
        setAmountErrorMessage('必須項目です。入力してください');
    } else {
        setAmountErrorMessage('');
    }
  }, [amount]);
  useEffect(() => {
    const isLengthMemo = textLengthCheck(memo, memoMaxLength)
    if (isLengthMemo) {
        setMemoErrorMessage('文字数が上限を超えています');
    } else {
        setMemoErrorMessage('');
    }
  }, [memo]);
  if (typedText === month) {
      return (
          <View>
              <Text style={tw`font-bold text-red-600`}>
                  {monthErrorMessage}
              </Text>
          </View>
      )
  } else if (typedText === title) {
      return (
          <View>
              <Text style={tw`font-bold text-red-600`}>
                  {titleErrorMessage}
              </Text>
          </View>
      )
  } else if (typedText === moneyAccountLabel) {
    return (
        <View>
            <Text style={tw`font-bold text-red-600`}>
                {moneyAccountLabelErrorMessage}
            </Text>
        </View>
    )
  } else if (typedText === amount) {
    return (
        <View>
            <Text style={tw`font-bold text-red-600`}>
                {amountErrorMessage}
            </Text>
        </View>
    )
  } else {
      return (
          <View>
              <Text style={tw`font-bold text-red-600`}>
                  {memoErrorMessage}
              </Text>
          </View>
      )
  };
}


export default ErrorMessageForMoney