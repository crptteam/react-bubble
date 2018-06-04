import React from 'react';
import styled from 'styled-components';

const Elem = styled.div`
  background: rgba(0,0,0,0);
  border-radius: 7px;
  position: relative;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 2;
`;

const ContentWrap = props => {

  return <Elem {...props} />;
};

export default ContentWrap;
