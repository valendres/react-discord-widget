import { Channel, Member } from './';

export interface Server {
  id: string;
  name: string;
  instant_invite?: boolean;
  channels: [Channel];
  members: [Member];
}
