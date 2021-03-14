import React from "react";
import { shallow } from "enzyme";
import { PageShell } from "./PageShell";

const DEFAULT_PROPS = {
  children: (
    <div>
      <span>Child content</span>
    </div>
  ),
};

describe("PageShell", () => {
  describe("Basic rendering", () => {
    it("Renders with default props", () => {
      const wrapper = shallow(<PageShell {...DEFAULT_PROPS} />);
      expect(wrapper.length).toEqual(1);
    });
  });
});
