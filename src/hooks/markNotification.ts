import { useSession } from "../context/ctx";

const MarkNotifications = () => {
  const { session } = useSession();

  const markAsRead = async (notificationId: number) => {
    try {
      const url = `${process.env.EXPO_PUBLIC_API_URL}/marcarnotificacion/${notificationId}?leida=1`;

      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${session}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Network was not ok: ${response.statusText}`);
      }
    } catch (err) {
      console.error("Couldn't mark notification as read: ", err);
    }
  };

  return { markAsRead };
};

export default MarkNotifications;
