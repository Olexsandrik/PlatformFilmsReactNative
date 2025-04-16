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
        className="flex flex-row w-full flex-1 min-w-[112px] min-h-20 justify-center items-center rounded-full overflow-hidden"
      >
        <Image source={icon} tintColor="#151312" className="size-5" />
        <Text className="text-secondary text-base fond-semibold ">{title}</Text>
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
      title: "Home",
      headerShown: false,
      tabBarIcon: ({ focused }) => (
        <>
          <TabIcon focused={focused} icon={icons.home} title="Home" />
        </>
      ),
    },
  },
  {
    name: "search",
    options: {
      title: "Search",
      headerShown: false,
      tabBarIcon: ({ focused }) => (
        <>
          <TabIcon focused={focused} icon={icons.search} title="Search" />
        </>
      ),
    },
  },
  {
    name: "saved",
    options: {
      title: "Saved",
      headerShown: false,
      tabBarIcon: ({ focused }) => (
        <>
          <TabIcon focused={focused} icon={icons.save} title="Saved" />
        </>
      ),
    },
  },
  {
    name: "profile",
    options: {
      title: "Profile",
      headerShown: false,
      tabBarIcon: ({ focused }) => (
        <>
          <TabIcon focused={focused} icon={icons.person} title="Profile" />
        </>
      ),
    },
  },
];
