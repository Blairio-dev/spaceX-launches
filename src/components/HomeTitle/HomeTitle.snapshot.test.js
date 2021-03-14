import React from "react";
import renderer from "react-test-renderer";
import { HomeTitle } from "./HomeTitle";

const DEFAULT_PROPS = {};

describe("HomeTitle Snapshots", () => {
  it("Renders with default props", () => {
    const tree = renderer.create(<HomeTitle {...DEFAULT_PROPS} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
