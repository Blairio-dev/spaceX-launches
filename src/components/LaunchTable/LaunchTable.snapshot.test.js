import React from "react";
import renderer from "react-test-renderer";
import { LaunchTable } from "./LaunchTable";

const testData = [
  {
    id: "1",
    mission_name: "FalconSat",
    launch_date_utc: "2006-03-24T22:30:00.000Z",
    launch_year: "2006",
    rocket: {
      rocket_name: "Falcon 1",
    },
  },
  {
    id: "2",
    mission_name: "DemoSat",
    launch_date_utc: "2007-03-21T01:10:00.000Z",
    launch_year: "2007",
    rocket: {
      rocket_name: "Falcon 1",
    },
  },
  {
    id: "3",
    mission_name: "Trailblazer",
    launch_date_utc: "2008-08-03T03:34:00.000Z",
    launch_year: "2008",
    rocket: {
      rocket_name: "Falcon 1",
    },
  },
  {
    id: "4",
    mission_name: "RatSat",
    launch_date_utc: "2008-09-28T23:15:00.000Z",
    launch_year: "2008",
    rocket: {
      rocket_name: "Falcon 1",
    },
  },
  {
    id: "5",
    mission_name: "RazakSat",
    launch_date_utc: "2009-07-13T03:35:00.000Z",
    launch_year: "2009",
    rocket: {
      rocket_name: "Falcon 1",
    },
  },
];

const DEFAULT_PROPS = {
  filterOnChange: jest.fn(),
  launchData: testData,
  launchYear: "",
  sortOnClick: jest.fn(),
};

const FULLEST_PROPS = {
  ...DEFAULT_PROPS,
  isAscending: true,
  launchYear: "2008",
};

describe("LaunchTable Snapshots", () => {
  it("Renders with default props", () => {
    const tree = renderer.create(<LaunchTable {...DEFAULT_PROPS} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Renders with fullest props", () => {
    const tree = renderer.create(<LaunchTable {...FULLEST_PROPS} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
