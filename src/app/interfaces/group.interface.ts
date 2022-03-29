export interface GroupI {
  title: string;
  img: string;
  live: boolean;
  participants: number;
}

export type GroupVerticalSlideI = Omit<GroupI, 'participants'>;
