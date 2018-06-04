import React from 'react';
import styled from 'styled-components';

const Elem = styled.div`
  border-radius: 7px;
  padding: 14px;
  position: relative;
  margin-left: ${props => props.marginLeft ? props.marginLeft : 0};
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : 0};
  width: 288px;
  box-sizing: border-box;
  max-width: 288px;
`;

const BubbleWrap = props => {

  return <Elem {...props} />;
};

export default BubbleWrap;
