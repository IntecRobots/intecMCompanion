import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";

import Colors from "@/src/constants/Colors";
import { useColorScheme } from "@/src/hooks/useColorScheme";
import { useClientOnlyValue } from "@/src/hooks/useClientOnlyValue";

function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>["name"]; color: string }) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        tabBarLabelStyle: { fontFamily: "PoppinsSemiBold" },
        tabBarActiveTintColor: "#3673F5",
        tabBarInactiveTintColor: "white",
        headerShown: useClientOnlyValue(false, true),
        headerStyle: {
          backgroundColor: "black",
        },
        tabBarStyle: {
          backgroundColor: "black",
          borderTopColor: "#292929",
          borderTopWidth: 1,
          height: 65,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerTitleStyle: { fontFamily: "PoppinsSemiBold" },
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          headerTitleStyle: { fontFamily: "PoppinsSemiBold" },
          title: "Notificaciones",
          tabBarIcon: ({ color }) => <TabBarIcon name="bell" color={color} />,
        }}
      />
      <Tabs.Screen
        name="visitas"
        options={{
          headerTitleStyle: { fontFamily: "PoppinsSemiBold" },
          title: "Visitas",
          tabBarIcon: ({ color }) => <TabBarIcon name="users" color={color} />,
        }}
      />
      <Tabs.Screen
        name="rooms"
        options={{
          headerTitleStyle: { fontFamily: "PoppinsSemiBold" },
          title: "Salas",
          tabBarIcon: ({ color }) => <TabBarIcon name="coffee" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Opciones",
          // headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="cog" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
    </Tabs>
  );
}
