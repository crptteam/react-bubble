import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from "@storybook/addon-actions";
import {
  withKnobs,
  text,
  boolean,
  number,
  array,
  select
} from '@storybook/addon-knobs/react';

import Bubble from "../components/Bubble";

const elements = storiesOf('Bubble', module);

elements.addDecorator(withKnobs);

elements.add('default', () => {
return <Bubble
  background={"#1A99F4"}
    header={<div>123</div>}
  >Хаха изи</Bubble>

});



