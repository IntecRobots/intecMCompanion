import React, { useState } from "react";
import { useStorageState } from "../hooks/useStorageState";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { sendPushToken } from "../utils/sendPushToken";

const AuthContext = React.createContext<{
  signIn: (username: string, password: string) => Promise<void>;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
  loading: boolean;
}>({
  signIn: async (username, password) => {},
  signOut: () => null,
  session: null,
  isLoading: false,
  loading: false,
});

export function useSession() {
  const value = React.useContext(AuthContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
  }

  return value;
}

export function SessionProvider(props: React.PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState("session");
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <AuthContext.Provider
      value={{
        signIn: async (username: string, password: string) => {
          try {
            const pushToken = await AsyncStorage.getItem("pushtoken");
            setLoading(true);
            const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/auth/login`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                username: username,
                password: password,
              }),
            });

            const json: any = await response.json();
            console.log(json);
            if (response.status === 200) {
              await sendPushToken(pushToken as string, json.token, json.user_id);
              setSession(json.token);
              setLoading(false);
              router.replace("/(tabs)");
            } else {
              setLoading(false);
              console.error(response.status);
            }
          } catch (error) {
            setLoading(false);
            console.error(error);
          }
        },
        signOut: () => {
          router.replace("/");
          setSession(null);
        },
        session,
        isLoading,
        loading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
