import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";
import { Platform } from "react-native";
import Constants from "expo-constants";
import * as Device from "expo-device";

export const sendPushNotification = async (expoPushToken: any) => {
  const message = {
    to: expoPushToken.data,
    sound: "default",
    title: "Test notification title",
    body: "Test notification body",
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

    if (!response.ok) {
      console.error("Push notification sending failed:", responseData);
    } else {
      console.log("Push notification sent successfully!");
    }
  } catch (error) {
    console.error("Error sending push notification:", error);
  }
};

export const storeNotification = async (notification: any) => {
  try {
    const savedNotifications = await AsyncStorage.getItem("@notifications");
    const existingNotifications = savedNotifications ? JSON.parse(savedNotifications) : [];

    const newNotification = { ...notification, isRead: false };
    console.log(newNotification);
    const updatedNotifications = [...existingNotifications, newNotification];

    await AsyncStorage.setItem("@notifications", JSON.stringify(updatedNotifications));
  } catch (error) {
    console.error("Error saving notification:", error);
  }
};

export const registerForPushNotificationsAsync = async () => {
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
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }
  await AsyncStorage.setItem("pushtoken", JSON.stringify(token));
  return token;
};
