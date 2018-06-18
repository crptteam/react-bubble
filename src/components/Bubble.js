import React from 'react';

import PropTypes from 'prop-types';

import { withTheme } from "styled-components";

const ComponentName = 'Bubble';

import BubbleWrap from '../styled/BubbleWrap';
import BubbleContent from '../styled/BubbleContent';
import BackgroundWrap from '../styled/BackgroundWrap';
import ContentWrap from '../styled/ContentWrap';


class Bubble extends React.Component {
  render() {

    return (
      <BubbleWrap {...this.props}>
        <BackgroundWrap background={this.props.background}/>

        <ContentWrap>
          {this.props.header}
          <BubbleContent>{this.props.children}</BubbleContent>
        </ContentWrap>



      </BubbleWrap>
    );
  }
}

Bubble.propTypes = {
  header: PropTypes.any,
  background: PropTypes.string,
  marginBottom: PropTypes.string,
  marginLeft: PropTypes.string,
};

Bubble.defaultProps = {

};

Bubble.displayName = ComponentName;

export default withTheme(Bubble);
