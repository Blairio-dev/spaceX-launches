import React from "react";
import renderer from "react-test-renderer";
import { Image } from "./Image";
import RefreshIcon from "../../assets/icon/refresh.png";
import RefreshIcon2x from "../../assets/icon/refresh@2x.png";
import RefreshIcon3x from "../../assets/icon/refresh@3x.png";

const DEFAULT_PROPS = {
  alt: "alternate-text",
  source: RefreshIcon,
};

const FULLEST_PROPS = {
  ...DEFAULT_PROPS,
  height: "64px",
  sourceSet: `
      ${RefreshIcon3x} 3x,
      ${RefreshIcon2x} 2x,
      ${RefreshIcon} 1x,
    `,
  width: "64px",
};

describe("Image Snapshots", () => {
  it("Renders with default props", () => {
    const tree = renderer.create(<Image {...DEFAULT_PROPS} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Renders with fullest props", () => {
    const tree = renderer.create(<Image {...FULLEST_PROPS} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
