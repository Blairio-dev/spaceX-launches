import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import moment from "moment";
import { colours } from "../../assets/tokens";
import { Button, Inline } from "../../components";
import { Select } from "../Select/Select";
import { sortLaunches } from "../../assets/functions";

const StyledControls = styled("div")`
  margin-bottom: 13px;

  select {
    margin-right: 9px;
  }
`;

const StyledRow = styled("tr")`
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 2px 15px 0px hsl(0, 0%, 0%, 25%);
  color: ${colours.text};
  display: flex;
  min-height: 80px;
  justify-content: space-between;
  margin-bottom: 6px;
`;

const StyledFlightNumber = styled("td")`
  font-family: "Brandon Grotesque Medium";
  font-size: 40px;
  font-weight: 500;
  margin-left: 32px;
  margin-right: 24px;
  width: 76px;
`;

const StyledMissionName = styled("td")`
  font-family: "Brandon Grotesque Medium";
  font-size: 32px;
  font-weight: 500;
  width: 100%;
`;

const StyledLaunchDate = styled("div")`
  display: flex;
  font-family: "Brandon Grotesque Regular";
  font-size: 16px;
  justify-content: inherit;
  margin-bottom: 8px;
  white-space: nowrap;
`;

const StyledRocketName = styled("div")`
  display: flex;
  font-family: "Brandon Grotesque Bold";
  font-size: 24px;
  justify-content: inherit;
`;

const StackedCell = styled("td")`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 21px;
  margin-right: 16px;
`;

const StyledTable = styled("table")`
  border-spacing: 0;
  width: 100%;

  td {
    padding: 0;
  }
`;

const LaunchTable = ({
  filterOnChange,
  isAscending,
  launchData,
  launchYear,
  sortOnClick,
}) => {
  const launchYearOptions = [
    ...new Set(launchData.map((launch) => launch.launch_year)),
  ];
  const filteredLaunches = sortLaunches(launchData, launchYear, isAscending);
  return (
    <div>
      <StyledControls>
        <Inline.RightAligned
          nodes={[
            <Select
              labelText="Filter by Year"
              key="launch-year-filter-select"
              id="launch-year-filter-select"
              onChange={(event) => filterOnChange(event)}
              selectOptions={["Filter by Year", ...launchYearOptions]}
              selectedOption={launchYear}
            />,
            <Button.Sort
              labelText={`Sort ${isAscending ? "Descending" : "Ascending"}`}
              key="button-sort"
              onClick={sortOnClick}
            />,
          ]}
        />
      </StyledControls>
      <StyledTable>
        <tbody>
          {filteredLaunches.map((launch, index) => (
            <StyledRow key={`#${launch.id}-${launch.mission_name}-${index}`}>
              <StyledFlightNumber>{`#${launch.id}`}</StyledFlightNumber>
              <StyledMissionName>{launch.mission_name}</StyledMissionName>
              <StackedCell>
                <StyledLaunchDate>
                  {moment(launch.launch_date_utc).format("Do MMM YYYY")}
                </StyledLaunchDate>
                <StyledRocketName>{launch.rocket.rocket_name}</StyledRocketName>
              </StackedCell>
            </StyledRow>
          ))}
        </tbody>
      </StyledTable>
    </div>
  );
};

LaunchTable.propTypes = {
  /** Set to true when data should be sorted in ascending order. */
  isAscending: PropTypes.bool.isRequired,
  /** Callback function triggered on change of the filter select. */
  filterOnChange: PropTypes.func.isRequired,
  /** Launch data to populate the table. */
  launchData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      mission_name: PropTypes.string.isRequired,
      launch_date_utc: PropTypes.string.isRequired,
      launch_year: PropTypes.string.isRequired,
      rocket: PropTypes.PropTypes.shape({
        rocket_name: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
  /** Selected launch year used to filter data. */
  launchYear: PropTypes.string.isRequired,
  /** Callback function triggered on click of sort button. */
  sortOnClick: PropTypes.func.isRequired,
};

LaunchTable.defaultProps = {
  isAscending: true,
};

export { LaunchTable };
