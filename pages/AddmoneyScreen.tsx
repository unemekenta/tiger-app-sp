import React, {useState} from 'react';
import tw from 'twrnc';
import { SafeAreaView, View, TextInput, Button, ScrollView, Text, Alert } from 'react-native';
import { blankCheck, blankNumCheck, textLengthCheck } from "../components/util/index"
import ErrorMessageForMoney from "../components/organisms/ErrorMessageForMoney"

const AddmoneyScreen = () => {
  const [month, setMonth] = useState("")
  const [title, setTitle] = useState("")
  const [moneyAccountLabel, setMoneyAccountLabel] = useState("")
  const [amount, setAmount] = useState("")
  const [memo, setMemo] = useState("")

  const memoMaxLength:number = 1000;

  const sendData = (month, title, moneyAccountLabel, amount, memo) => {
    const isBlankMonth = blankNumCheck(month)
    const isBlankTitle = blankCheck(title)
    const isBlankMoneyAccountLabel = blankNumCheck(moneyAccountLabel)
    const isBlankAmount = blankNumCheck(amount)
    const isLengthMemo = textLengthCheck(memo, memoMaxLength)

    if (isBlankMonth || isBlankTitle || isBlankMoneyAccountLabel || isBlankAmount || isLengthMemo) {
      Alert.alert('入力に誤りがあります。正しく入力してください')
      return
    }
    // TODO API通信
    // } else {
    //   firebase.auth().createUserWithEmailAndPassword(email, password)
    //     .then(user => {
    //       if (user) {
    //         Alert.alert("アカウントの登録が完了しました")
    //           dispatch(signInAction({ userEmail: email, userPassword: password }));
    //           return
    //       }
    //     })
    //     .catch(error => {
    //       if (error.message === "The email address is already in use by another account.") {
    //           Alert.alert("すでに登録されているメールアドレスです。")
    //       } else if (error.message === "Password should be at least 6 characters") {
    //           Alert.alert("パスワードは6文字以上で登録してください。")
    //       } else {
    //           Alert.alert("エラーです。異る入力内容でもう一度お試しください")
    //             console.log(error.message);
    //       }
    //    })
    // }
  }

  return (
    <SafeAreaView style={tw`m-8`}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={{ fontSize: 20 }}>新規作成</Text>
        </View>
        <View>
          <View style={tw`mt-6 mb-3`}>
            <Text style={tw`mb-3 font-semibold`}>登録月</Text>
            <TextInput
              placeholder="登録月"
              autoCapitalize='none'
              onChangeText={setMonth}
              style={tw`w-full py-2 border-b focus:outline-none focus:border-b-2 focus:border-indigo-500 placeholder-gray-500`}
            />
          </View>
          <ErrorMessageForMoney month={month} typedText={month} />
          <View style={tw`mt-6 mb-3`}>
            <Text style={tw`mb-3 font-semibold`}>項目名</Text>
              <TextInput
                 placeholder="項目名"
                 autoCapitalize='none'
                 onChangeText={setTitle}
                 style={tw`w-full py-2 border-b focus:outline-none focus:border-b-2 focus:border-indigo-500 placeholder-gray-500`}
              />
          </View>
          <ErrorMessageForMoney title={title} typedText={title} />
          <View style={tw`mt-6 mb-3`}>
            <Text style={tw`mb-3 font-semibold`}>収支</Text>
              <TextInput
                 placeholder="収支"
                 autoCapitalize='none'
                 onChangeText={setMoneyAccountLabel}
                 style={tw`w-full py-2 border-b focus:outline-none focus:border-b-2 focus:border-indigo-500 placeholder-gray-500`}
              />
          </View>
          <ErrorMessageForMoney moneyAccountLabel={moneyAccountLabel} typedText={moneyAccountLabel} />
          <View style={tw`mt-6 mb-3`}>
            <Text style={tw`mb-3 font-semibold`}>金額</Text>
              <TextInput
                 placeholder="金額"
                 autoCapitalize='none'
                 onChangeText={setAmount}
                 style={tw`w-full py-2 border-b focus:outline-none focus:border-b-2 focus:border-indigo-500 placeholder-gray-500`}
              />
          </View>
          <ErrorMessageForMoney amount={amount} typedText={amount} />
          <View style={tw`mt-6 mb-3`}>
            <Text style={tw`mb-3 font-semibold`}>メモ</Text>
              <TextInput
                 placeholder="メモ"
                 autoCapitalize='none'
                 onChangeText={setMemo}
                 style={tw`w-full py-2 border-b focus:outline-none focus:border-b-2 focus:border-indigo-500 placeholder-gray-500`}
              />
          </View>
          <ErrorMessageForMoney memo={memo} memoMaxLength={memoMaxLength} typedText={memo} />
          <View style={tw`my-6 bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded`}>
            <Button
               title="送信"
               onPress={() => sendData(month, title, moneyAccountLabel, amount, memo)}
               color="#ffffff"
            />
          </View>
          <View>
            <View>
              <Text>・全ての項目を入力してください。</Text>
            </View>
            <View>
               <Text>・赤文字が出力されている状態では登録できません。</Text>
            </View>
            <View>
               <Text>・メモは{memoMaxLength}文字以下で入力してください。</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddmoneyScreen;