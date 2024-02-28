import { useState, useEffect } from "react";
import { useSession } from "../context/ctx";

const useRooms = (url: string) => {
  const [rooms, setRooms] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  const { session } = useSession();

  useEffect(() => {
    const fetchRooms = async () => {
      console.log("Iniciando la petición para obtener las salas");
      try {
        const response = await fetch(url, {
          method: "GET", // o POST, PUT, etc., según sea necesario
          headers: {
            Authorization: `Bearer ${session}`, // Aquí se agrega el token
            "Content-Type": "application/json", // Asegúrate de establecer el tipo de contenido apropiado
          },
          // Si necesitas enviar datos en el cuerpo de la solicitud (por ejemplo, en POST o PUT), agrégalos aquí.
        });
        console.log("Respuesta recibida", response);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log("Datos recibidos y procesados", data);
        setRooms(data);
      } catch (err) {
        console.error("Error durante la petición", err);
        setError(err);
      } finally {
        console.log("Finalización de la petición, ya sea con éxito o error");
        setIsLoading(false);
      }
    };

    fetchRooms();
  }, [url]);

  return { rooms, isLoading, error };
};

export default useRooms;
