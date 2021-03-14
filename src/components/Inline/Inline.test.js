import React from "react";
import { shallow } from "enzyme";
import { Inline } from "./Inline";

const DEFAULT_PROPS = {
  nodes: [<div key="123">123</div>, <div key="345">345</div>],
};

const FULLEST_PROPS = {
  ...DEFAULT_PROPS,
  verticalAlignment: "center",
};

describe("Inline", () => {
  describe(".Justified", () => {
    describe("Basic rendering", () => {
      it("Renders with default props", () => {
        const wrapper = shallow(<Inline.Justified {...DEFAULT_PROPS} />);
        expect(wrapper.length).toEqual(1);
      });
      it("Renders with fullest props", () => {
        const wrapper = shallow(<Inline.Justified {...FULLEST_PROPS} />);
        expect(wrapper.length).toEqual(1);
      });
    });
  });
  describe(".RightAligned", () => {
    describe("Basic rendering", () => {
      it("Renders with default props", () => {
        const wrapper = shallow(<Inline.RightAligned {...DEFAULT_PROPS} />);
        expect(wrapper.length).toEqual(1);
      });
      it("Renders with fullest props", () => {
        const wrapper = shallow(<Inline.RightAligned {...FULLEST_PROPS} />);
        expect(wrapper.length).toEqual(1);
      });
    });
  });
});
