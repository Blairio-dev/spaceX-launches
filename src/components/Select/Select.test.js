import React from "react";
import { shallow, mount } from "enzyme";
import { Select } from "./Select";

const options = ["1995", "1996", "1997", "1998", "1999", "2000"];

const DEFAULT_PROPS = {
  id: "test-select",
  onChange: jest.fn(),
  selectedOption: "",
  selectOptions: options,
};

describe("Select", () => {
  describe("Basic rendering", () => {
    it("Renders with default props", () => {
      const wrapper = shallow(<Select {...DEFAULT_PROPS} />);
      expect(wrapper.length).toEqual(1);
    });
  });
  describe("Event handling", () => {
    it("Unselected year", () => {
      const wrapper = shallow(<Select {...DEFAULT_PROPS} />);
      const select = wrapper.find("Styled(select)");
      expect(select.props().value).toEqual("");
    });
    it("Selected year", () => {
      const wrapper = mount(
        <Select {...DEFAULT_PROPS} selectedOption="1995" />
      );
      const select = wrapper.find("Styled(select)");
      expect(select.props().value).toEqual("1995");
    });
  });
});
