import React from 'react';
import tw from 'twrnc';
import { SafeAreaView, View, ScrollView, Text } from 'react-native';
import AddBotton from '../components/atoms/AddBotton';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`m-2`}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text>ホーム画面</Text>
        <View style={tw`bg-blue-500 w-full min-h-30 shadow-lg mx-auto my-10 py-5 px-2 rounded justify-center`}>
          <Text style={tw`text-white m-auto`}>今月あと<Text style={tw`text-xl font-bold`}>18</Text>日</Text>
          <Text style={tw`text-white m-auto`}>使えるお金あと<Text style={tw`text-xl font-bold`}>1000</Text>円</Text>
          <Text style={tw`text-white m-auto`}>1日<Text style={tw`text-4xl font-bold`}>100</Text>円で生きろ!</Text>
        </View>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
        <Text>中央に大きめの文字が表示されるよ</Text>
      </ScrollView>
      <View style={tw`absolute bottom-3 right-3`}>
        <AddBotton navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;