import { Status, Game } from './';

export interface Member {
  id: string;
  username: string;
  avatar: string;
  avatar_url: string;
  discriminator: string;
  status: 'online' | 'idle' | 'dnd' | 'offline';
  game?: Game;
  nick?: string;
  channel_id?: string;
  suppress?: boolean;
  deaf?: boolean;
  mute?: boolean;
  self_deaf?: boolean;
  self_mute?: boolean;
}
