import AsyncStorage from "@react-native-async-storage/async-storage";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

export const refreshAccessToken = async () => {
  try {
    const tokens = await GoogleSignin.getTokens();
    await AsyncStorage.setItem("accestoken", tokens.accessToken as string);
  } catch (error: any) {
    console.log("Error refreshing access token:", error.message);
  }
};
