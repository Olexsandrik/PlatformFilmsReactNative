import React from "react";
import { Tabs } from "expo-router";
import { ReactNode } from "react";
import { icons } from "@/constants/icons";
import { Image, ImageBackground, Text, View } from "react-native";
import { images } from "@/constants/images";
import { RouterType, TabIconProps } from "@/types/tabsTypes";

const TabIcon = ({ focused, title, icon }: TabIconProps) => {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className="flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
      >
        <Image source={icon} tintColor="#151312" className="size-5" />
        <Text className="text-secondary text-base font-semibold ">{title}</Text>
      </ImageBackground>
    );
  }
  return (
    <View className="size-full justify-center items-center mt-4 rounded -full">
      <Image source={icon} tintColor="#A8B5DB" className="size-5" />
    </View>
  );
};
export const routerArray: RouterType[] = [
  {
    name: "index",
    options: {
      title: "index",
      headerShown: false,
      tabBarIcon: ({ focused }) => (
        <TabIcon focused={focused} icon={icons.home} title="Home" />
      ),
    },
  },
  {
    name: "search",
    options: {
      title: "Search",
      headerShown: false,
      tabBarIcon: ({ focused }) => (
        <TabIcon focused={focused} icon={icons.search} title="Search" />
      ),
    },
  },
  {
    name: "saved",
    options: {
      title: "Saved",
      headerShown: false,
      tabBarIcon: ({ focused }) => (
        <TabIcon focused={focused} icon={icons.save} title="Saved" />
      ),
    },
  },
  {
    name: "profile",
    options: {
      title: "Profile",
      headerShown: false,
      tabBarIcon: ({ focused }) => (
        <TabIcon focused={focused} icon={icons.person} title="Profile" />
      ),
    },
  },
];

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0F0D23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0F0D23",
        },
      }}
    >
      {routerArray.map((item) => {
        return (
          <Tabs.Screen
            key={item.options.title}
            name={item.name}
            options={{
              title: item.options.title,
              headerShown: item.options.headerShown,
              tabBarIcon: item.options.tabBarIcon,
            }}
          />
        );
      })}
    </Tabs>
  );
};

export default _Layout;
