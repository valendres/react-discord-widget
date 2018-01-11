import * as React from 'react';
import styled from 'styled-components';
import styledWithProps from '../helpers/react/withStyledProps';

const Container = styledWithProps<any>()(styled.div)`
  background-color: ${props => props.theme.bodyBackgroundColor};
  padding: ${props => props.theme.bodyPadding};
`;

const Body = (props:any) => (
  <Container>
    {props.children}
  </Container>
);

export default Body;
