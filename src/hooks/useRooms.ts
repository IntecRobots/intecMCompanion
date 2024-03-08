import { useState, useEffect, useCallback } from "react";
import { useSession } from "../context/ctx";

const useRooms = (url: string) => {
  const [rooms, setRooms] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);
  const { session } = useSession();

  const refetch = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${session}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const data = await response.json();
      setRooms(data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, [url, session]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return { rooms, isLoading, error, refetch };
};

export default useRooms;
