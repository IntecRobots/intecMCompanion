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

}