import React from "react";
import renderer from "react-test-renderer";
import { PageShell } from "./PageShell";

const DEFAULT_PROPS = {
  children: (
    <div>
      <span>Child content</span>
    </div>
  ),
};

describe("PageShell Snapshots", () => {
  it("Renders with default props", () => {
    const tree = renderer.create(<PageShell {...DEFAULT_PROPS} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
