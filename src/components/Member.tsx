import * as React from 'react';
import styled from 'styled-components';
import styledWithProps from '../helpers/react/withStyledProps';

const statusColor = (status:string):string => {
  switch (status) {
    case 'idle':
      return '#faa61a';
    case 'dnd':
      return '#f04747';
    case 'online':
      return '#43b581';
    default:
      return '#747f8d';
  }
};

const Container = styledWithProps<any>()(styled.div)`
  margin: ${props => props.theme.memberSpacing} 0;
`;

const Avatar = styledWithProps<any>()(styled.div)`
  background-image: url("${props => props.src}");
  background-size:
    ${props => props.theme.avatarSize}
    ${props => props.theme.avatarSize}
  ;
  border-radius: ${props => props.theme.avatarBorderRadius};
  margin-right: ${props => props.theme.avatarMarginRight};
  width: ${props => props.theme.avatarSize};
  height: ${props => props.theme.avatarSize};
  vertical-align: middle;
  position: relative;
  display: inline-block;

  &:after {
    content: "";
    position: absolute;
    bottom: ${props => props.theme.statusIndicatorOffset};
    right: ${props => props.theme.statusIndicatorOffset};
    width: ${props => props.theme.statusIndicatorSize};
    height: ${props => props.theme.statusIndicatorSize};
    background-color: ${props => statusColor(props.status)};
    border-radius: 50%;
    border:
      ${props => props.theme.statusIndicatorBorderWidth}
      solid
      ${props => props.theme.bodyBackgroundColor}
    ;
  }
`;

const Name = styledWithProps<any>()(styled.span)`
  color: ${props => props.theme.memberFontColor};
  font-size: ${props => props.theme.memberFontSize};
  font-weight: ${props => props.theme.memberFontWeight};
`;

interface MemberProps {
  avatar_url?: string;
  nick?: string;
  username: string;
  status: string;
}

export default class Member extends React.PureComponent<MemberProps>  {
  render() {
    const {
      avatar_url,
      nick,
      username,
      status,
    } = this.props;

    return (
      <Container>
        {avatar_url &&
          <Avatar src={avatar_url} status={status}/>
        }
        <Name>{nick || username}</Name>
      </Container>
    );
  }
}
