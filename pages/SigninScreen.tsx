import {useState} from 'react';
import tw from 'twrnc';
import { SafeAreaView, View, TextInput, Button, ScrollView, Text, Alert } from 'react-native';
// import { useDispatch } from "react-redux"
import { jpCheck, blankCheck, checkEmailFormat } from "../components/util/index"
import ErrorMessage from "../components/organisms/ErrorMessage"

const SigninScreen = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  // const dispatch = useDispatch();

  const signUp = (email, password, confirmPassword) => {
    const isJapanese = jpCheck(email)
    const isBlankEmail = blankCheck(email)
    const isBlankPassword = blankCheck(password)
    const isBlankConfirmPassword = blankCheck(confirmPassword)
    const isFormatAddress = checkEmailFormat(email)
    const isMatchPassword = password !== confirmPassword
    if (isJapanese || isBlankEmail || isBlankPassword || isFormatAddress || isBlankConfirmPassword || !isMatchPassword) {
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
      <View>
        <Text style={{ fontSize: 20 }}>ログイン</Text>
      </View>
      <View>
        <View style={tw`mt-6 mb-3`}>
          <Text style={tw`mb-3 font-semibold`}>メールアドレス</Text>
          <TextInput
            placeholder="メールアドレス"
            autoCapitalize='none'
            onChangeText={setEmail}
            style={tw`w-full py-2 border-b focus:outline-none focus:border-b-2 focus:border-indigo-500 placeholder-gray-500`}
          />
        </View>
        <ErrorMessage email={email} typedText={email} />
        <View style={tw`mt-6 mb-3`}>
        <Text style={tw`mb-3 font-semibold`}>パスワード</Text>
          <TextInput
             placeholder="パスワード"
             type="password"
             secureTextEntry={true}
             onChangeText={setPassword}
             style={tw`w-full py-2 border-b focus:outline-none focus:border-b-2 focus:border-indigo-500 placeholder-gray-500`}
          />
        </View>
        <ErrorMessage password={password} typedText={password} />
        <View style={tw`mt-6 mb-3`}>
        <Text style={tw`mb-3 font-semibold`}>確認用パスワード</Text>
          <TextInput
             placeholder="確認用パスワード"
             type="confirmPassword"
             secureTextEntry={true}
             onChangeText={setConfirmPassword}
             style={tw`w-full py-2 border-b focus:outline-none focus:border-b-2 focus:border-indigo-500 placeholder-gray-500`}
          />
        </View>
        <ErrorMessage password={password} confirmPassword={confirmPassword} typedText={confirmPassword} />
        <View style={tw`my-6 bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded`}>
          <Button
             title="送信"
             onPress={() => signUp(email, password)}
             color="#ffffff"
          />
        </View>
        <View>
          <View>
            <Text>・全ての項目を入力してください。</Text>
          </View>
          <View>
             <Text>・メールアドレスは[@]があり、[@]後に1つ以上の[.]が</Text>
          </View>
          <View>
             <Text>   なければ登録できません。</Text>
          </View>
          <View>
             <Text>・赤文字が出力されている状態では登録できません。</Text>
          </View>
          <View>
             <Text>・パスワードは6文字以上で入力してください。</Text>
          </View>
        </View>
        <View>
          <Button
            title="サインイン画面へ戻る"
            onPress={() => navigation.navigate("SigninScreen")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SigninScreen;