import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const UserScreen = ({ navigation }) => {
  return (
    <View>
      <Text>ユーザ画面</Text>
      <TouchableOpacity style={tw`w-auto`} onPress={() => navigation.navigate('SigninScreen')} >
        <Text>ログインはこちら</Text>
      </TouchableOpacity>
      <TouchableOpacity style={tw`w-auto`} onPress={() => navigation.navigate('SignupScreen')} >
        <Text>新規登録はこちら</Text>
      </TouchableOpacity>
      <TouchableOpacity style={tw`w-auto`} onPress={() => navigation.navigate('SignoutScreen')} >
        <Text>サインアウトはこちら</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserScreen;