import { useState, useEffect } from "react";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

const useCalendar = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCalendarEvents = async (accessToken: any) => {
    try {
      console.log("Solicitando eventos del calendario...");
      const response = await fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        setError("Error en la solicitud a la API del calendario");
      }

      const data = await response.json();
      setEvents(data.items);
      console.log("Eventos del calendario recibidos");
    } catch (error) {
      console.error("Error al solicitar los eventos del calendario:", error);
      setError("Error en la solicitud a la API del calendario");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getAccessTokenAndFetchEvents = async () => {
      try {
        console.log("Obteniendo token...");
        const tokens = await GoogleSignin.getTokens();
        console.log(tokens);
        await fetchCalendarEvents(tokens.accessToken);
      } catch (error: any) {
        setError("Inicia sesión con Google para ver tus eventos de Calendar");
        setLoading(false);
      }
    };

    getAccessTokenAndFetchEvents();
  }, []);

  return { events, loading, error };
};

export default useCalendar;
