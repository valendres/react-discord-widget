import * as React from 'react';
import styled from 'styled-components';
import styledWithProps from '../helpers/react/withStyledProps';
import { Member as MemberType, SettingsMap } from '../types';
import Member from './Member';

const Container = styled.div``;

const Title = styledWithProps<any>()(styled.div)`
  color: ${props => props.theme.channelFontColor};
  font-size: ${props => props.theme.channelFontSize};
  font-weight: ${props => props.theme.channelFontWeight};
`;

const Icon = styledWithProps<any>()(styled.span)`
  &:before {
    content: "${props => props.theme.channelIconContent}";
    color: ${props => props.theme.channelIconColor};
    background-image: ${
      props => props.theme.channelIconImage
        ? 'url("' + props.theme.channelIconImage + '")'
        : 'none'
    };
    background-size:
      ${props => props.theme.channelIconWidth}
      ${props => props.theme.channelIconHeight}
    ;
    width: ${props => props.theme.channelIconWidth};
    height: ${props => props.theme.channelIconHeight};
    margin-right: ${props => props.theme.channelIconSpacing};
    vertical-align: ${props => props.theme.channelIconVerticalAlign};
    display: inline-block;
  }
`;

const Members = styledWithProps<any>()(styled.div)`
  margin-left: ${props => props.indent ? props.theme.channelIconWidth : 0};
`;

interface ChannelProps {
  name: string;
  members: MemberType[];
  settings: SettingsMap;
}

export default class Channel extends React.PureComponent<ChannelProps>  {
  render() {
    const {
      name,
      members,
      settings,
    } = this.props;

    return (
      <Container>
        <Title>
          {settings.showChannelIcons &&
            <Icon />
          }
          <span>{name}</span>
        </Title>
        <Members indent={settings.showChannelIcons}>
          {members.map((member:MemberType) => (
            <Member key={member.id} {...member} />
          ))}
        </Members>
      </Container>
    );
  }
}
