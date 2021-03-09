import styled from "@emotion/styled";
import {
  Button,
  ButtonWrapper,
  Image,
  Inline,
  LaunchTable,
} from "./components";
import spaceXLogo from "./assets/img/spacex-logo.png";

const StyledContentWrapper = styled("div")`
  padding-right: 80px;
`;

const StyledHeaderWrapper = styled("div")`
  margin-bottom: 52px;
`;

const StyledWrapper = styled("div")`
  padding-left: 40px;
  padding-top: 24px;
`;

const App = () => (
  <StyledWrapper>
    <StyledHeaderWrapper>
      <Inline.Justified
        nodes={[
          <Image alt="SpaceX Logo" height="22px" imageUrl={spaceXLogo} />,
          <Button.Reload />,
        ]}
      />
    </StyledHeaderWrapper>
    <StyledContentWrapper>
      <ButtonWrapper>
        <Inline.RightAligned
          nodes={[
            <Button.Filter labelText="Filter by Year" />,
            <Button.Sort labelText="Sort Descending" />,
          ]}
        />
      </ButtonWrapper>
      <LaunchTable
        launchData={[
          {
            flight_number: 1,
            mission_name: "FalconSat",
            launch_date_utc: "2006-03-24T22:30:00.000Z",
            rocket: {
              rocket_name: "Falcon 1",
            },
          },
        ]}
      />
    </StyledContentWrapper>
  </StyledWrapper>
);

export { App };
