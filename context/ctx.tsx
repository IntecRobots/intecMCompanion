import React from "react";
import { useStorageState } from "../hooks/useStorageState";
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
            const response = await fetch(`${process.env.BACKEND_URL}/auth/login`, {
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
          router.replace("/");
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
