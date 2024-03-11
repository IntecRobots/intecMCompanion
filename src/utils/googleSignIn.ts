import AsyncStorage from "@react-native-async-storage/async-storage";
import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";

export const googleSignIn = async () => {
  try {
    console.log("Checking for Google Play Services...");
    await GoogleSignin.hasPlayServices();
    console.log("Google Play Services are available.");

    console.log("Attempting to sign in...");
    const userInfo = await GoogleSignin.signIn();
    await AsyncStorage.setItem("googletoken", userInfo.idToken as string);

    const tokens = await GoogleSignin.getTokens();

    await AsyncStorage.setItem("accestoken", tokens.accessToken as string);

    console.log("Sign in successful:", userInfo);
  } catch (error: any) {
    console.error("Sign in error:", error);

    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      console.warn("Sign in was cancelled by the user.");
    } else if (error.code === statusCodes.IN_PROGRESS) {
      console.warn("Sign in is already in progress.");
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      console.error("Google Play Services not available.");
    } else {
      console.error("An unknown error occurred during Google Sign In.");
    }
  }
};
