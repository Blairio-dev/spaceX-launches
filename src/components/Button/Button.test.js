import React from "react";
import { shallow } from "enzyme";
import { Button } from "./Button";

const DEFAULT_PROPS = {
  onClick: jest.fn(),
};

describe("Button", () => {
  describe("Basic rendering", () => {
    describe(".Reload", () => {
      it("Renders with default props", () => {
        const wrapper = shallow(<Button.Reload {...DEFAULT_PROPS} />);
        expect(wrapper.length).toEqual(1);
      });
    });
    describe(".Sort", () => {
      it("Renders with default props", () => {
        const wrapper = shallow(
          <Button.Sort {...DEFAULT_PROPS} labelText="Sort" />
        );
        expect(wrapper.length).toEqual(1);
      });
    });
  });

  describe("Event handling", () => {
    describe(".Reload", () => {
      it("Invokes the onClick callback when an Button is clicked", () => {
        const wrapper = shallow(<Button.Reload {...DEFAULT_PROPS} />);
        wrapper.simulate("click");
        expect(DEFAULT_PROPS.onClick).toHaveBeenCalled();
      });
    });
    describe(".Sort", () => {
      it("Invokes the onClick callback when an Button is clicked", () => {
        const wrapper = shallow(
          <Button.Sort {...DEFAULT_PROPS} labelText="Sort" />
        );
        wrapper.simulate("click");
        expect(DEFAULT_PROPS.onClick).toHaveBeenCalled();
      });
    });
  });
});
