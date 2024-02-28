import { useState } from "react";
import { useSession } from "../context/ctx";

export const useRoomUpdate = () => {
  const [isUpdating, setIsUpdating] = useState<boolean>(false);

  const { session } = useSession();

  const updateRoomState = async (roomId: string, newState: boolean) => {
    console.log(`Iniciando actualización de la sala con ID: ${roomId}`);
    setIsUpdating(true);

    try {
      console.log("Enviando petición PATCH...");
      const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/salas/update/${roomId}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${session}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ estado: newState ? 1 : 0 }),
      });

      console.log("Respuesta recibida", response);

      if (!response.ok) {
        throw new Error("Error al actualizar el estado de la sala");
      }

      console.log(`Sala con ID: ${roomId} actualizada exitosamente.`);
    } catch (error) {
      console.error("Error en la petición PATCH", error);
    } finally {
      console.log(`Finalizando actualización de la sala con ID: ${roomId}`);
      setIsUpdating(false);
    }
  };

  return { isUpdating, updateRoomState };
};
