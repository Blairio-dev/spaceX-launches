import React from "react";
import { shallow } from "enzyme";
import { BodyText } from "./BodyText";

const DEFAULT_PROPS = {
  text: "Body text",
};

describe("BodyText", () => {
  describe("Basic rendering", () => {
    it("Renders with default props", () => {
      const wrapper = shallow(<BodyText {...DEFAULT_PROPS} />);
      expect(wrapper.length).toEqual(1);
    });
  });
});
