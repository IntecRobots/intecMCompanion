export type Visit = {
  title: string;
  description: string;
  startDate: string;
  startTime: string;
  room: string;
};

export type Notification = {
  title: string;
  body: string;
  isRead: boolean;
  hasButtons: boolean;
};

export type GoogleEvent = {
  anfitrion: number;
  description: string | null;
  id: string;
  location: string;
  summary: string;
  start: DateTime;
  end: DateTime;
  attendees: Attendee[];
};

type DateTime = {
  date: string | null;
  dateTime: string;
  timeZone: string;
};

type Attendee = {
  displayName: string;
  email: string;
};

export type GoogleEventsResponse = {
  googleEvent: GoogleEvent[];
};
