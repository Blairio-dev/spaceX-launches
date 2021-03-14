import React from "react";
import renderer from "react-test-renderer";
import { Inline } from "./Inline";

const DEFAULT_PROPS = {
  nodes: [<div key="123">123</div>, <div key="345">345</div>],
};

const FULLEST_PROPS = {
  ...DEFAULT_PROPS,
  verticalAlignment: "center",
};

describe("Inline Snapshots", () => {
  describe(".Justified", () => {
    it("Renders with default props", () => {
      const tree = renderer
        .create(<Inline.Justified {...DEFAULT_PROPS} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("Renders with fullest props", () => {
      const tree = renderer
        .create(<Inline.Justified {...FULLEST_PROPS} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe(".RightAligned", () => {
    it("Renders with default props", () => {
      const tree = renderer
        .create(<Inline.RightAligned {...DEFAULT_PROPS} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("Renders with fullest props", () => {
      const tree = renderer
        .create(<Inline.RightAligned {...FULLEST_PROPS} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
