import { ReactElement, ReactNode } from "react";
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
    tabBarIcon: (props: {
      focused: boolean;
      color: string;
      size?: number;
    }) => ReactElement;
  };
};
