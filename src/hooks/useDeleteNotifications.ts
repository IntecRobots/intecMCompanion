import { useState } from "react";
import { useSession } from "../context/ctx";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useDeleteNotifications = () => {
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const { session } = useSession();
  
  const deleteNotifications = async () => {
    const userId = await AsyncStorage.getItem("userId");
    console.log(`Borrar notificaciones...`);
    setIsDeleting(true);

    try {
      console.log("Enviando petición PATCH...");
      const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/deletenotificaciones/${userId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${session}`,
        },
      });

      console.log("Respuesta recibida", response);

      if (!response.ok) {
        throw new Error("Error al borrar notificaciones");
      }

      console.log(`Notificaciones borradas.`);
    } catch (error) {
      console.error("Error en la petición DELETE", error);
    } finally {
      console.log(`Finalizando borrado de notificaciones para el usuario: ${userId}`);
      setIsDeleting(false);
    }
  };

  return { isDeleting, deleteNotifications };
};
