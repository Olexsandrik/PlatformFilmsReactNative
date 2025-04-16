import React, { ReactNode } from "react";
import { Tabs } from "expo-router";

import { routerArray } from "@/config/tabsConfig";

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
          backgroundColor: "#0f0023",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0f0023",
        },
      }}
    >
      {routerArray.map((item) => {
        return (
          <Tabs.Screen
            key={item.name}
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
