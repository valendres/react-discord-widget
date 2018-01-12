import * as React from 'react';
import assign from 'lodash.assign';
import styled from 'styled-components';
import styledWithProps from '../helpers/react/withStyledProps';
import { fetchServerData, parseServerData } from '../api/discord';
// import rawData from './data';
import {
  AppState,
  Channel as ChannelType,
  Member as MemberType,
  SettingsMap,
} from '../types';
import Header from '../components/Header';
import Body from '../components/Body';
import Channel from '../components/Channel';
import Member from '../components/Member';
import ServerStats from '../components/ServerStats';

const initialState:AppState = {
  initialized: false,
  loading: true,
  name: '',
  channels: {
    keys: [] as [string],
    data: {},
  },
  members: {
    keys: [] as [string],
    data: {},
  },
};

interface AppProps {
  settings: SettingsMap;
}

interface ContainerProps {
  loading?: boolean;
}

const Container = styledWithProps<ContainerProps>()(styled.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export default class App extends React.Component<AppProps, {}> {
  state:AppState = initialState;

  componentDidMount() {
    this.updateState.call(this);
    setInterval(this.updateState.bind(this), this.props.settings.refreshInterval);
  }

  updateState() {
    this.setState({ loading: true }, () => {
      fetchServerData(this.props.settings.serverId)
        .catch((error:any) => {
          debugger;
        })
        .then(parseServerData)
        .then((newState:AppState) => {
          this.setState(assign({}, newState, {
            loading: false,
          }));
        });
    });
  }

  render():any {
    const {
      settings,
    } = this.props;
    const {
      initialized,
      loading,
      name,
      channels,
      members,
    } = this.state;

    const allPlayers = members.keys
      .map((key:string) => members.data[key]);
    const onlinePlayers = allPlayers
      .filter((member:MemberType) => member.channel_id !== undefined);

    return (
      <Container>
        {settings.showHeader &&
          <Header name={settings.serverName || name}/>
        }
        <Body>
          {settings.showChannels
            ? channels.keys
              .map((channelKey:string) => channels.data[channelKey])
              .map((channel:ChannelType) => {
                const membersArray = channel.memberKeys
                    .map((memberKey:string):MemberType => members.data[memberKey]);
                return <Channel
                  key={channel.id}
                  name={channel.name}
                  members={membersArray}
                  settings={this.props.settings}
                />;
              })
            : members.keys
              .map((memberKey:string) => members.data[memberKey])
              .map((member:MemberType) => (
                <Member key={member.id} {...member} />
              ))
          }
          {initialized && settings.showServerStats &&
            <ServerStats
              onlineCount={onlinePlayers.length}
              totalCount={allPlayers.length}
            />
          }
        </Body>
      </Container>
    );
  }
}
