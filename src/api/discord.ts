import { Server, AppState, Channel, Member } from '../types';

export const fetchServerData = (server_id:string):Promise<Server> => {
  return fetch(`https://discordapp.com/api/servers/${server_id}/embed.json`)
    .then(response => response.json());
};

export const parseServerData = (server:Server):AppState => {
  const state:AppState = {
    initialized: true,
    name: server.name,
    channels: {
      keys: [] as [string],
      data: {},
    },
    members: {
      keys: [] as [string],
      data: {},
    },
  };

  // Iterate over channels
  server.channels
    .sort((a:Channel, b:Channel):number => a.position - b.position)
    .forEach((channel:Channel) => {
      state.channels.keys.push(channel.id);
      state.channels.data[channel.id] = Object.assign({}, channel, {
        memberKeys: [] as [string],
      });
    });

  // Iterate over members
  server.members
    .sort((a:Member, b:Member):number => {
      return (a.nick || a.username).localeCompare((b.nick || b.username));
    })
    .forEach((member:Member) => {
      state.members.keys.push(member.id);
      state.members.data[member.id] = Object.assign({}, member);
      if (member.channel_id) {
        state.channels.data[member.channel_id].memberKeys.push(member.id);
      }
    });

  return state;
};
