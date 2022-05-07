import React from 'react';
import tw from 'twrnc';
import { SafeAreaView, View, Text } from 'react-native';
import { ScrollView } from 'native-base';

const MoneyScreen = () => {
  return (
    <SafeAreaView style={tw`m-2`}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text>今月の収支</Text>
        <View style={tw`bg-blue-500 w-full min-h-30 shadow-lg mx-auto my-10 py-5 px-4 rounded justify-center`}>
          <View>
            <Text style={tw`text-white m-auto`}>2022年5月</Text>
          </View>
          <View style={tw`flex justify-center flex-row flex-wrap my-2`}>
            <Text style={tw`flex-auto text-white`}>収入</Text>
            <Text style={tw`flex-auto text-white text-right`}>¥<Text style={tw`text-2xl font-bold`}>220000</Text></Text>
          </View>
          <View style={tw`flex justify-center flex-row flex-wrap my-2`}>
            <Text style={tw`flex-auto text-white`}>支出</Text>
            <Text style={tw`flex-auto text-white text-right`}>¥<Text style={tw`text-2xl font-bold`}>220000</Text></Text>
          </View>
          <View style={tw`flex justify-center flex-row flex-wrap my-2 bg-white p-3`}>
            <Text style={tw`flex-auto`}>残金</Text>
            <Text style={tw`flex-auto text-right`}>¥<Text style={tw`text-3xl font-bold`}>220000</Text></Text>
          </View>
        </View>
        <View style={tw`w-full`}>
          <Text style={tw`text-xl font-bold mb-3`}>内訳</Text>
          <View style={tw`mb-3`}>
            <Text style={tw`text-lg`}>収入</Text>
            <View style={tw`mb-3 flex justify-between flex-row flex-wrap bg-white px-2 py-3 rounded`}>
              <Text style={tw`text-lg`}>給料</Text>
              <Text style={tw`text-lg`}>¥2000</Text>
            </View>
            <View style={tw`mb-3 flex justify-between flex-row flex-wrap bg-white px-2 py-3 rounded`}>
              <Text style={tw`text-lg`}>臨時収入</Text>
              <Text style={tw`text-lg`}>¥2000</Text>
            </View>
          </View>
          <View style={tw``}>
            <Text style={tw`text-lg`}>支出</Text>
            <View style={tw`mb-3 flex justify-between flex-row flex-wrap bg-white px-2 py-3 rounded`}>
              <Text style={tw`text-lg`}>家賃</Text>
              <Text style={tw`text-lg`}>¥2000</Text>
            </View>
            <View style={tw`mb-3 flex justify-between flex-row flex-wrap bg-white px-2 py-3 rounded`}>
              <Text style={tw`text-lg`}>食費</Text>
              <Text style={tw`text-lg`}>¥2000</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MoneyScreen;