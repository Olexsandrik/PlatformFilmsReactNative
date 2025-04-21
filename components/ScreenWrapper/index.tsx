import { View, Text, Image, ActivityIndicator, ScrollView } from "react-native";
import React, { ReactNode } from "react";
import { icons } from "@/constants/icons";

import { useRouter } from "expo-router";
import { images } from "@/constants/images";
import SearchBar from "../SearchBar";

type ScreenWrapperProps = {
  children?: ReactNode;
  placeholder?: string;
  moviesLoading: boolean;
  moviesError: Error | null;
};

export const ScreenWrapper = ({
  children,
  moviesLoading,
  moviesError,
}: ScreenWrapperProps) => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />

      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10,
        }}
      >
        <Image source={icons.logo} className="h-10 w-12  mt-20 mb-5 mx-auto " />
        <SearchBar
          onPress={() => {
            router.push("/search");
          }}
          placeholder="Search for a movie"
        />
        {moviesLoading ? (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            className="mt-10 self-center"
          />
        ) : moviesError ? (
          <Text className="text-white font-bold text-xl ">
            Error: {moviesError?.message}
          </Text>
        ) : (
          <View className="flex-1 mt-5">
            <>
              <Text className="text-lg text-white font-bold mt-5 mb-3">
                Latest Movies
              </Text>

              {children}
            </>
          </View>
        )}
      </ScrollView>
    </View>
  );
};
