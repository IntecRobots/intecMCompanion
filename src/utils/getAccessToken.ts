import { GoogleSignin } from "@react-native-google-signin/google-signin";

export const getAccessToken = async () => {
  try {
    const tokens = await GoogleSignin.getTokens();
    return tokens.accessToken;
  } catch (error: any) {
    console.log("Error refreshing access token:", error.message);
  }
};
