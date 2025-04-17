import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

type Props = {
  placeholder: string;
  onPress?: () => void;
};
const SearchBar = ({ onPress, placeholder }: Props) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-5">
      <Image
        source={icons.search}
        className="size-5 mr-11"
        resizeMode="contain"
        tintColor="#ab8bff"
      />

      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        onChangeText={() => {}}
        placeholderTextColor="#a8b5db"
        className="flex-1  text-white"
      />
    </View>
  );
};

export default SearchBar;
