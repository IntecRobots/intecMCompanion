import React from "react";
import { useStorageState } from "../hooks/useStorageState";
import { Alert } from "react-native";
import { router } from "expo-router";

interface LoginResponse {
  token: string;
  message: string;
}

const AuthContext = React.createContext<{
  signIn: (username: string, password: string) => Promise<void>;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}>({
  signIn: async (username, password) => {},
  signOut: () => null,
  session: null,
  isLoading: false,
});

// This hook can be used to access the user info.
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

  return (
    <AuthContext.Provider
      value={{
        signIn: async (username: string, password: string) => {
          try {
            const response = await fetch("https://t2o.intecrobots.com/api/auth/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                username: username,
                password: password,
              }),
            });

            const json: LoginResponse = await response.json();
            if (response.status === 200) {
              setSession(json.token);
              router.replace("/(tabs)");
            } else {
              console.error(response.status);
            }
          } catch (error) {
            console.error(error);
          }
        },
        signOut: () => {
          setSession(null);
        },
        session,
        isLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
