import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useRef, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';


import { useColorScheme } from "@/src/hooks/useColorScheme";
import { SessionProvider } from "@/src/context/ctx";
import { Platform, Pressable, Text } from "react-native";

import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import Constants from "expo-constants";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "index",
};

SplashScreen.preventAutoHideAsync();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const storeNotification = async (notification: any) => {
  try {
    const savedNotifications = await AsyncStorage.getItem('@notifications');
    const existingNotifications = savedNotifications ? JSON.parse(savedNotifications) : [];
    
    const newNotification = { ...notification, isRead: false };
    console.log(newNotification);
    const updatedNotifications = [...existingNotifications, newNotification];

    await AsyncStorage.setItem('@notifications', JSON.stringify(updatedNotifications));
  } catch (error) {
    console.error('Error saving notification:', error);
  }
};



async function sendPushNotification(expoPushToken: any) {
  const message = {
    to: expoPushToken.data,
    sound: "default",
    title: "Original Title",
    body: "And here is the body!",
    data: { someData: "goes here" },
  };

  try {
    console.log("Sending push notification:", message);

    const response = await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Accept-encoding": "gzip, deflate",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });

    const responseData = await response.json();
    console.log("Response from push notification server:", responseData);

    // Check if the response status is not OK
    if (!response.ok) {
      console.error("Push notification sending failed:", responseData);
    } else {
      console.log("Push notification sent successfully!");
    }
  } catch (error) {
    console.error("Error sending push notification:", error);
  }
}

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = await Notifications.getExpoPushTokenAsync({
      projectId: Constants?.expoConfig?.extra?.eas.projectId,
    });
    console.log(JSON.stringify(token));
  } else {
    alert("Must use physical device for Push Notifications");
  }
  await AsyncStorage.setItem('pushtoken', JSON.stringify(token));
  return token;
}

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });
  const [expoPushToken, setExpoPushToken] = useState<any>("");
  const [notification, setNotification] = useState<any>(false);
  const notificationListener = useRef<any>();
  const responseListener = useRef<any>();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener((notification) => {
      setNotification(notification);
      storeNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener((response) => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <RootLayoutNav>
      <Pressable onPress={() => sendPushNotification(expoPushToken)}>
        <Text>dsada</Text>
      </Pressable>
    </RootLayoutNav>
  );
}

function RootLayoutNav(props: React.PropsWithChildren) {
  const colorScheme = useColorScheme();

  return (
    <SessionProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        {/* props.children */}
        <Stack initialRouteName="index">
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: "modal" }} />
        </Stack>
      </ThemeProvider>
    </SessionProvider>
  );
}
