import { useState } from "react";
import styled from "@emotion/styled";
import { gql, useQuery } from "@apollo/client";
import {
  BodyText,
  Button,
  HomeTitle,
  Image,
  Inline,
  LaunchTable,
  PageShell,
} from "./components";
import launchHome from "./assets/img/launch-home.png";
import launchHome2x from "./assets/img/launch-home@2x.png";
import launchHome3x from "./assets/img/launch-home@3x.png";
import { breakpoints, colours } from "./assets/tokens";

const getLaunches = gql`
  {
    launches {
      id
      mission_name
      launch_date_utc
      launch_year
      rocket {
        rocket_name
      }
    }
  }
`;

const StyledBodyWrapper = styled("div")`
  display: flex;
  justify-content: flex-end;
`;

const StyledContentWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  padding-right: 80px;

  @media (max-width: ${breakpoints.lg}) {
    padding-right: 40px;
  }
`;

const StyledHeaderWrapper = styled("div")`
  margin-bottom: 52px;
`;

const StyledLaunchDataWrapper = styled("div")`
  width: 100%;
`;

const StyledRocketWrapper = styled("div")`
  margin-top: 82px;
  margin-right: 59px;

  img {
    height: unset;
    margin: 0 40px;
    width: 100%;
  }

  @media (max-width: ${breakpoints.lg}) {
    display: flex;
    justify-content: center;
    margin-right: 0;
    margin-top: 40px;
    width: 100%;
  }
`;

const StyledWrapper = styled("div")`
  background-color: ${colours.primaryBlue};
  display: flex;
  justify-content: center;
  min-height: 100vh;
  min-width: 100vw;
`;

const App = () => {
  const [isAscending, setIsAscending] = useState(true);
  const [launchYear, setLaunchYear] = useState("");

  const { loading, error, data, refetch } = useQuery(getLaunches, {
    notifyOnNetworkStatusChange: true,
  });

  const filterOnChange = (e) =>
    setLaunchYear(e.target.value === "Filter by Year" ? "" : e.target.value);

  return (
    <StyledWrapper>
      <PageShell>
        <StyledHeaderWrapper>
          <Inline.Justified
            nodes={[
              <HomeTitle key="home-title" />,
              <Button.Reload key="button-reload" onClick={() => refetch()} />,
            ]}
            verticalAlignment="center"
          />
        </StyledHeaderWrapper>
        <StyledContentWrapper>
          <Inline.Justified
            nodes={[
              <StyledRocketWrapper key="rocket-image">
                <Image
                  alt="Rocket launching"
                  height="694px"
                  sourceSet={`
                    ${launchHome3x} 3x,
                    ${launchHome2x} 2x,
                    ${launchHome} 1x,
                  `}
                />
              </StyledRocketWrapper>,
              <StyledLaunchDataWrapper key="launch-data">
                <StyledBodyWrapper>
                  {loading && <BodyText text="Fetching launch data..." />}
                  {error && <BodyText text="Houston, we have a problem..." />}
                </StyledBodyWrapper>
                {!loading && !error && (
                  <LaunchTable
                    filterOnChange={filterOnChange}
                    isAscending={isAscending}
                    launchData={data.launches}
                    launchYear={launchYear}
                    sortOnClick={() => setIsAscending(!isAscending)}
                  />
                )}
              </StyledLaunchDataWrapper>,
            ]}
          />
        </StyledContentWrapper>
      </PageShell>
    </StyledWrapper>
  );
};

export { App };
