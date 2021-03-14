import React from "react";
import moment from "moment";
import { mount } from "enzyme";
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

const wrapper = mount(<LaunchTable {...DEFAULT_PROPS} />);
const rows = wrapper.find("tbody").find("tr");

describe("Table", () => {
  describe("Basic rendering and semantics", () => {
    it("Renders with default props", () => {
      expect(wrapper.length).toEqual(1);
    });
    it("Single table element", () => {
      const table = wrapper.find("table");
      expect(table).toHaveLength(1);
    });
    it("Single tbody element", () => {
      const tbody = wrapper.find("tbody");
      expect(tbody).toHaveLength(1);
    });
    it("Only data six rows", () => {
      expect(rows).toHaveLength(5);
    });
  });
  describe("Content checks", () => {
    it("Rows content", () => {
      rows.forEach((tr, rowIndex) => {
        const cells = tr.find("td");
        expect(cells.at(0).text()).toEqual(`#${testData[rowIndex].id}`);
        expect(cells.at(1).text()).toEqual(testData[rowIndex].mission_name);
        expect(cells.at(2).text()).toEqual(
          `${moment(testData[rowIndex].launch_date_utc).format("Do MMM YYYY")}${
            testData[rowIndex].rocket.rocket_name
          }`
        );
      });
    });
  });
  describe("Sorting/Filtering", () => {
    it("Sorted by date descending", () => {
      const sortedWrapper = mount(
        <LaunchTable {...DEFAULT_PROPS} isAscending={false} />
      );
      const sortedRows = sortedWrapper.find("tbody").find("tr");
      const firstRowCells = sortedRows.at(0).find("td");
      const lastRowCells = sortedRows.at(4).find("td");
      expect(firstRowCells.at(0).text()).toEqual("#5");
      expect(lastRowCells.at(0).text()).toEqual("#1");
    });
    it("Filtered by year", () => {
      const sortedWrapper = mount(
        <LaunchTable {...DEFAULT_PROPS} launchYear="2008" />
      );
      const sortedRows = sortedWrapper.find("tbody").find("tr");

      const firstRowCells = sortedRows.at(0).find("td");
      const lastRowCells = sortedRows.at(1).find("td");
      expect(sortedRows).toHaveLength(2);
      expect(firstRowCells.at(1).text()).toEqual("Trailblazer");
      expect(lastRowCells.at(1).text()).toEqual("RatSat");
    });
  });
});
