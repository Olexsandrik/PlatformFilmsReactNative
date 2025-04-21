import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";
import { useMySearch } from "../Context";

type SearchBarProps = {
  placeholder: string;
  onPress?: () => void;
};
const SearchBar = ({ onPress, placeholder }: SearchBarProps) => {
  const { search, setSearch } = useMySearch();
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
        value={search}
        placeholder={placeholder}
        onChangeText={(text: string) => setSearch(text)}
        placeholderTextColor="#a8b5db"
        className="flex-1  text-white"
      />
    </View>
  );
};

export default SearchBar;
