import React from "react";
import renderer from "react-test-renderer";
import { BodyText } from "./BodyText";

const DEFAULT_PROPS = {
  text: "Body text",
};

describe("BodyText Snapshots", () => {
  it("Renders with default props", () => {
    const tree = renderer.create(<BodyText {...DEFAULT_PROPS} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
