import React from "react";
import { shallow } from "enzyme";
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

describe("Image", () => {
  describe("Basic rendering", () => {
    it("Renders with default props", () => {
      const wrapper = shallow(<Image {...DEFAULT_PROPS} />);
      expect(wrapper.length).toEqual(1);
    });
    it("Renders with fullest props", () => {
      const wrapper = shallow(<Image {...FULLEST_PROPS} />);
      expect(wrapper.length).toEqual(1);
    });
  });
});
