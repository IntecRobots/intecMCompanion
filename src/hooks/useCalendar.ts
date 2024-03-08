import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";

const useCalendar = () => {
  const [events, setEvents] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  const refetch = useCallback(async () => {
    console.log("Refetch iniciado - setLoading a true");
    setLoading(true);
    setError(null);

    try {
      console.log("Obteniendo token de acceso...");
      const accessToken = await AsyncStorage.getItem("accestoken");
      console.log(`Token obtenido: ${accessToken}`);

      console.log("Haciendo petición a la API de calendario...");
      const response = await fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Datos recibidos de la API");
      setEvents(data.items);
    } catch (err) {
      console.error("Error en refetch", err);
      setError(err);
    } finally {
      console.log("Refetch finalizado - setLoading a false");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    console.log("Ejecutando refetch desde useEffect");
    refetch();
  }, [refetch]);

  return { events, loading, error, refetch };
};

export default useCalendar;
