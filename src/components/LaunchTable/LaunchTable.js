import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const StyledRow = styled("tr")`
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 2px 15px 0px hsl(0, 0%, 0%, 25%);
  display: flex;
  height: 80px;
  margin-bottom: 6px;
`;

const StyledFlightNumber = styled("td")`
  padding-left: 32px;
  width: 76px;
`;

const StyledMissionName = styled("td")`
  width: 454px;
`;

const StyledLaunchDate = styled("div")`
  display: flex;
  justify-content: inherit;
  margin-bottom: 8px;
`;

const StyledRocketName = styled("div")`
  display: flex;
  justify-content: inherit;
`;

const StackedCell = styled("td")`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 21px;
  padding-right: 16px;
`;

const StyledTable = styled("table")``;

const LaunchTable = ({ launchData }) => (
  <StyledTable>
    <tbody>
      {launchData.map((launch) => (
        <StyledRow key={launch.flight_number}>
          <StyledFlightNumber>{`#${launch.flight_number}`}</StyledFlightNumber>
          <StyledMissionName>{launch.mission_name}</StyledMissionName>
          <StackedCell>
            <StyledLaunchDate>{launch.launch_date_utc}</StyledLaunchDate>
            <StyledRocketName>{launch.rocket.rocket_name}</StyledRocketName>
          </StackedCell>
        </StyledRow>
      ))}
    </tbody>
  </StyledTable>
);

LaunchTable.propTypes = {
  launchData: PropTypes.arrayOf(
    PropTypes.shape({
      flight_number: PropTypes.number.isRequired,
      mission_name: PropTypes.string.isRequired,
      launch_date_utc: PropTypes.instanceOf(Date).isRequired,
      rocket: PropTypes.PropTypes.shape({
        rocket_name: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
};

export { LaunchTable };
