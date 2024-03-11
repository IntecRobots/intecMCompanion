import AsyncStorage from "@react-native-async-storage/async-storage";

export const clearNotifications = async () => {
    try {
      await AsyncStorage.removeItem("@notifications");
      console.log("Notifications cleared");
    } catch (error) {
      console.error("Error clearing notifications:", error);
    }
  };