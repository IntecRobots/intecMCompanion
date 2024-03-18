import { GoogleEvent, GoogleEventsResponse } from "../types/types";

export const transformEvents = (events: any[]): GoogleEventsResponse => {

  const googleEvents: GoogleEvent[] = events.map((event) => {
    return {
      anfitrion: 1,
      description: event.description,
      id: event.id,
      location: event.location,
      summary: event.summary,
      start: {
        date: event.start.date,
        dateTime: event.start.dateTime,
        timeZone: event.start.timeZone,
      },
      end: {
        date: event.end.date,
        dateTime: event.end.dateTime,
        timeZone: event.end.timeZone,
      },
      attendees: event.attendees.map((attendee: any) => ({
        displayName: attendee.displayName,
        email: attendee.email,
      })),
    };
  });

  return { googleEvent: googleEvents };
};

export const postEvents = async (events: any[], sessionToken: string) => {
  const transformedEvents = transformEvents(events);

  try {
    const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/visitas/addevent`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${sessionToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transformedEvents),
    });

    if (!response.ok) {
      throw new Error(`Error en la petición POST: ${JSON.stringify(response)}`);
    }

    const result = await response.json();
    console.log("Eventos enviados con éxito:", result);
  } catch (error) {
    console.error("Error al enviar eventos:", error);
  }
};
