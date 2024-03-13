import { Platform } from "react-native";

export const sendPushToken = async (pushToken: string, sessionToken: string, userId: number) => {
  try {
    console.log("Sending push token:", pushToken);
    console.log("to", typeof userId);
    console.log("Platform:", Platform.OS);

    const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/users/storeExpoToken`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${sessionToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        owner_type: Platform.OS,
        owner_id: 1,
        value: pushToken,
      }),
    });

    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}, response: ${JSON.stringify(response)}`);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    console.log(JSON.stringify(response));
    console.log("Push token sent successfully");
  } catch (error) {
    console.error("Error sending push token:", error);
  }
};
