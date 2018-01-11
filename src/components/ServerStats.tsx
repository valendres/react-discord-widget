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
  position: fixed;
  right: 0;
  bottom: 0;
  color: ${props => props.theme.serverStatsFontColor};
  font-size: ${props => props.theme.serverStatsFontSize};
  font-weight: ${props => props.theme.serverStatsFontWeight};
  background-color: ${props => props.theme.bodyBackgroundColor};
  box-shadow: 0 0 4px 3px ${props => props.theme.bodyBackgroundColor};
  padding: 0 ${props => props.theme.bodyPadding} 4px 2px;
`;

const Label = styled.span`
  margin-right: 4px;
`;

const Stats = styled.span``;


interface ServerStatsProps {
  onlineCount: number;
  totalCount: number;
}

export default class ServerStats extends React.PureComponent<ServerStatsProps>  {
  render() {
    const {
      onlineCount,
      totalCount,
    } = this.props;

    return (
      <Container>
        <Label>Online players:</Label>
        <Stats>{onlineCount} / {totalCount}</Stats>
      </Container>
    );
  }
}
