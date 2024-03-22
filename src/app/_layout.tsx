import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { useColorScheme } from "@/src/hooks/useColorScheme";
import { SessionProvider } from "@/src/context/ctx";

import * as Notifications from "expo-notifications";
import { refreshAccessToken } from "../utils/refreshAccesToken";
import useNotifications from "../hooks/useNotifications";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

import { RootSiblingParent } from "react-native-root-siblings";

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

GoogleSignin.configure({
  webClientId: "846381216746-2kl8npfsnbrmti0oaalcpuq8k13rtbn0.apps.googleusercontent.com",
  scopes: ["https://www.googleapis.com/auth/calendar"],
});

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Poppins: require("../../assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("../../assets/fonts/Poppins-Bold.ttf"),
    PoppinsSemiBold: require("../../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsMedium: require("../../assets/fonts/Poppins-Medium.ttf"),
    PoppinsItalic: require("../../assets/fonts/Poppins-Italic.ttf"),
    ...FontAwesome.font,
  });

  //temporary fix to refresh access token when app is loaded
  useEffect(() => {
    refreshAccessToken();
  }, []);

  const { expoPushToken } = useNotifications();

  useEffect(() => {
    if (expoPushToken) {
      console.log(`Expo Push Token: ${expoPushToken.data}`);
    }
  }, [expoPushToken]);

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
    <RootSiblingParent>
      <RootLayoutNav />
    </RootSiblingParent>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <SessionProvider>
      <ThemeProvider
        // value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        value={DarkTheme}
      >
        <Stack initialRouteName="index">
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: "modal" }} />
        </Stack>
      </ThemeProvider>
    </SessionProvider>
  );
}
