import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";
import { postEvents } from "../utils/buildAndSendEvents";
import { useSession } from "../context/ctx";

const useCalendar = () => {
  const [events, setEvents] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);
  const { session } = useSession();

  const refetch = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const accessToken = await AsyncStorage.getItem("accestoken");
      // console.log(`Token obtenido: ${accessToken}`);

      const response = await fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      setEvents(data.items);
      postEvents(data.items, session as string);
    } catch (err: any) {
      console.error("Error en refetch", err);
      setError(err.message);
    } finally {
      // console.log("Refetch finalizado - setLoading a false");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return { events, loading, error, refetch };
};

export default useCalendar;
