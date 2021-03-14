import React from "react";
import renderer from "react-test-renderer";
import { Button } from "./Button";

const DEFAULT_PROPS = {
  onClick: () => {},
};

describe("Button Snapshots", () => {
  describe(".Reload", () => {
    it("Renders with default props", () => {
      const tree = renderer
        .create(<Button.Reload {...DEFAULT_PROPS} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    describe(".Sort", () => {
      it("Renders with default props", () => {
        const tree = renderer
          .create(<Button.Sort {...DEFAULT_PROPS} labelText="Sort" />)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
