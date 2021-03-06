import * as React from 'react';
import styled from 'styled-components';
import styledWithProps from '../helpers/react/withStyledProps';
import { Server as ServerType } from '../types';

const Container = styledWithProps<any>()(styled.div)`
  flex: 0 0 auto;
  color: ${props => props.theme.headerFontColor};
  background-color: ${props => props.theme.headerBackgroundColor};
  padding: ${props => props.theme.headerPadding};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Name = styledWithProps<any>()(styled.span)`
  font-size: ${props => props.theme.headerFontSize};
  font-weight: ${props => props.theme.headerFontWeight};
`;

interface HeaderProps {
  name: string;
}

export default class Header extends React.PureComponent<HeaderProps>  {
  render() {
    const {
      name,
    } = this.props;

    return (
      <Container>
        <Name>{name}</Name>
      </Container>
    );
  }
}
