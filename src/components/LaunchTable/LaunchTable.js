import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import moment from "moment";
import { colours } from "../../assets/tokens";
import { Button, ButtonWrapper, Inline } from "../../components";

const StyledRow = styled("tr")`
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 2px 15px 0px hsl(0, 0%, 0%, 25%);
  color: ${colours.body};
  display: flex;
  min-height: 80px;
  justify-content: space-between;
  margin-bottom: 6px;
`;

const StyledFlightNumber = styled("td")`
  font-family: "Brandon Grotesque Medium";
  font-size: 40px;
  margin-left: 32px;
  margin-right: 24px;
  width: 76px;
`;

const StyledMissionName = styled("td")`
  font-family: "Brandon Grotesque Medium";
  font-size: 32px;
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
  padding-left: 21px;
  padding-right: 16px;
`;

const StyledTable = styled("table")``;

const LaunchTable = ({ launchData }) => (
  <div>
    <ButtonWrapper>
      <Inline.RightAligned
        nodes={[
          <Button.Filter labelText="Filter by Year" key="button-filter" />,
          <Button.Sort labelText="Sort Descending" key="button-sort" />,
        ]}
        verticalAlignment="center"
      />
    </ButtonWrapper>
    <StyledTable>
      <tbody>
        {launchData.map((launch) => (
          <StyledRow key={`#${launch.id}-${launch.mission_name}`}>
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

LaunchTable.propTypes = {
  launchData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      mission_name: PropTypes.string.isRequired,
      launch_date_utc: PropTypes.string.isRequired,
      rocket: PropTypes.PropTypes.shape({
        rocket_name: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
};

export { LaunchTable };
