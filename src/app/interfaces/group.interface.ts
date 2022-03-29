export interface GroupI {
  title: string;
  img: string;
  live: boolean;
  participants: number;
  lastMessage: string;
}

export type GroupVerticalSlideI = Omit<GroupI, 'participants' | 'lastMessage'>;
