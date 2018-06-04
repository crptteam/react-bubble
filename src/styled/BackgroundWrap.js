import React from 'react';
import styled from 'styled-components';

const Elem = styled.div`
  background: ${props => props.background ? props.background : 'rgba(0,0,0,0)'};
  border-radius: 7px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
  opacity: 0.1;
`;

const BackgroundWrap = props => {

  return <Elem {...props} />;
};

export default BackgroundWrap;
