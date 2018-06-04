import React from "react";
import { Bubble } from "../src/";

describe("Bubble", () => {

  it("Should renders without problems", () => {

    const wrapper = shallow(
      <Bubble>Inner message.</Bubble>
    );

    expect(wrapper).toMatchSnapshot();
  });
});

