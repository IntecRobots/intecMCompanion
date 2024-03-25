import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect, useCallback } from "react";
import { useSession } from "../context/ctx";

const useGetNotifications = () => {
  const [notifications, setNotifications] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);
  const { session } = useSession();

  const refetch = useCallback(async () => {
    const userId = await AsyncStorage.getItem("userId");
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_API_URL}/getnotificaciones/${userId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${session}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const data = await response.json();
      setNotifications(data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, [session]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return { notifications, isLoading, error, refetch };
};

export default useGetNotifications;
