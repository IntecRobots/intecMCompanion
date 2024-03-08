async function sendPushNotification(expoPushToken: any) {
    const message = {
      to: expoPushToken.data,
      sound: "default",
      title: "Original Title",
      body: "And here is the body!",
      data: { someData: "goes here" },
    };
  
    try {
      console.log("Sending push notification:", message);
  
      const response = await fetch("https://exp.host/--/api/v2/push/send", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Accept-encoding": "gzip, deflate",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });
  
      const responseData = await response.json();
      console.log("Response from push notification server:", responseData);
  
      // Check if the response status is not OK
      if (!response.ok) {
        console.error("Push notification sending failed:", responseData);
      } else {
        console.log("Push notification sent successfully!");
      }
    } catch (error) {
      console.error("Error sending push notification:", error);
    }
  }