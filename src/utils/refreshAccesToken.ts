import AsyncStorage from "@react-native-async-storage/async-storage";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

export const refreshAccessToken = async () => {
  const tokens = await GoogleSignin.getTokens();
  await AsyncStorage.setItem("accestoken", tokens.accessToken as string);
};
