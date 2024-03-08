import { useEffect, useRef, useState } from 'react';
import * as Notifications from 'expo-notifications';
import { registerForPushNotificationsAsync, storeNotification } from '../services/notificationService';

const useNotifications = () => {
  const [expoPushToken, setExpoPushToken] = useState<any>();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token: any) => setExpoPushToken(token));

    const notificationListener = Notifications.addNotificationReceivedListener((notification) => {
      storeNotification(notification);
    });

    const responseListener = Notifications.addNotificationResponseReceivedListener((response) => {
      console.log('Notification Response:', response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);

  return { expoPushToken };
};

export default useNotifications;
