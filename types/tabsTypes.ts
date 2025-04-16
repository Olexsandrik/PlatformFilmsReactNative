import { ReactNode } from "react";
import { ImageSourcePropType } from "react-native";

export type TabIconProps = {
  focused: boolean;
  title: string;
  icon: ImageSourcePropType;
};
export type RouterType = {
  name: string;
  options: {
    title: string;
    headerShown: boolean;
    tabBarIcon: ({ focused }: { focused: boolean }) => ReactNode;
  };
};
