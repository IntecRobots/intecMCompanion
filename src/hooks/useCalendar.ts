import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

const useCalendar = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCalendarEvents = async () => {
    try {
      console.log("Solicitando eventos del calendario...");
      const tokens = await GoogleSignin.getTokens()
      console.log(tokens);
      
      
      const response = await fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events", {
        headers: {
          Authorization: `Bearer ${tokens.accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Error en la respuesta de la API: ${JSON.stringify(response)}`);
      }

      const data = await response.json();
      setEvents(data.items);
      console.log("Eventos del calendario recibidos:", data.items);
    } catch (error: any) {
      console.error("Error al solicitar los eventos del calendario:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getAccessTokenAndFetchEvents = async () => {
      try {
        console.log("Obteniendo token de acceso desde AsyncStorage...");
        const accessToken = await AsyncStorage.getItem("googletoken");
        if (!accessToken) {
          throw new Error("No hay token de acceso disponible");
        }
        await fetchCalendarEvents();
      } catch (error: any) {
        console.error("Error en useCalendar:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    getAccessTokenAndFetchEvents();
  }, []);

  return { events, loading, error };
};

export default useCalendar;
