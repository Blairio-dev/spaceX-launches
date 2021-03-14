import React from "react";
import renderer from "react-test-renderer";
import { Select } from "./Select";

const options = ["1995", "1996", "1997", "1998", "1999", "2000"];

const DEFAULT_PROPS = {
  id: "test-select",
  onChange: jest.fn(),
  selectedOption: "",
  selectOptions: options,
};

describe("Select Snapshots", () => {
  it("Renders with default props", () => {
    const tree = renderer.create(<Select {...DEFAULT_PROPS} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
