import { useState, useEffect, useCallback } from "react";
import { useSession } from "../context/ctx";

const useVisits = (url: string) => {
  const [visits, setVisits] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);
  const { session } = useSession();

  const refetch = useCallback(async () => {
    // console.log("Starting to refetch visits");
    setIsLoading(true);
    setError(null);

    try {
      // console.log("Sending fetch request");
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${session}`,
          "Content-Type": "application/json",
        },
      });

      // console.log("Fetch request sent, processing response");
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const data = await response.json();
      // console.log("Fetch successful, data received:", data);
      setVisits(data);
    } catch (err) {
      console.error("Error fetching visits:", err);
      setError(err);
    } finally {
      // console.log("Refetch completed");
      setIsLoading(false);
    }
  }, [url, session]);

  useEffect(() => {
    console.log("useEffect triggered, refetching visits");
    refetch();
  }, [refetch]);

  return { visits, isLoading, error, refetch };
};

export default useVisits;
