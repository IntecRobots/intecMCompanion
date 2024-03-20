import AsyncStorage from "@react-native-async-storage/async-storage";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

export const googleSignOut = async () => {
  try {
    console.log("Checking for Google Play Services...");
    await AsyncStorage.setItem("googletoken", "");
    await GoogleSignin.signOut();

    console.log("Sign out successful");
  } catch (error: any) {
    console.error("Sign out error:", error);
  }
};
