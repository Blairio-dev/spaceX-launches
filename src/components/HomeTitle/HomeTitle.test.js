import React from "react";
import { mount } from "enzyme";
import { HomeTitle } from "./HomeTitle";

const DEFAULT_PROPS = {};
const wrapper = mount(<HomeTitle {...DEFAULT_PROPS} />);

describe("HomeTitle", () => {
  describe("Basic rendering", () => {
    it("Renders with default props", () => {
      expect(wrapper.length).toEqual(1);
    });
    it("Renders a single h1", () => {
      const title = wrapper.find("h1");

      expect(title.contains("LAUNCHES")).toEqual(true);
      expect(title).toHaveLength(1);
    });
  });
});
