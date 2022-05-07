import React from 'react';
import tw from 'twrnc';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AddBotton = ({navigation}) => {
  return (
    <TouchableOpacity style={tw`w-14 h-14 bg-blue-500 rounded-full bottom-0 left-0`} onPress={() => navigation.navigate('AddmoneyScreen')} >
      <Ionicons name="add-outline" style={tw`text-white m-auto`} />
    </TouchableOpacity>
  );
};

export default AddBotton;