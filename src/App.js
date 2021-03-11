import { useState } from "react";
import styled from "@emotion/styled";
import { gql, useQuery } from "@apollo/client";

import {
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
import { colours } from "./assets/tokens";

const getLaunches = gql`
  query Launch($launchOrder: String!) {
    launches(sort: "launch_date_utc", order: $launchOrder) {
      id
      mission_name
      launch_date_utc
      rocket {
        rocket_name
      }
    }
  }
`;

const StyledContentWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  padding-right: 80px;
`;

const StyledHeaderWrapper = styled("div")`
  margin-bottom: 52px;
`;

const StyledRocketWrapper = styled("div")`
  margin-top: 82px;
  margin-right: 59px;
`;

const StyledWrapper = styled("div")`
  background-color: ${colours.primaryBlue};
  display: flex;
  justify-content: center;
  min-height: 100vh;
`;

const App = () => {
  const [isAscending, setIsAscending] = useState(true);
  const launchOrder = isAscending ? "ASC" : "DESC";
  const { loading, error, data } = useQuery(getLaunches, {
    variables: { launchOrder },
  });
  return (
    <StyledWrapper>
      <PageShell>
        <StyledHeaderWrapper>
          <Inline.Justified
            nodes={[
              <HomeTitle key="home-title" />,
              <Button.Reload
                key="button-reload"
                onClick={() => console.log("Reload")}
              />,
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
              <div key="launch-data">
                {loading && <p>Fetching launch data...</p>}
                {error && <p>Houston, we have a problem...</p>}
                {!loading && !error && (
                  <LaunchTable
                    filterOnClick={() => console.log("Filter")}
                    launchData={data.launches}
                    sortOnClick={() => setIsAscending(!isAscending)}
                    sortLabelText={`Sort ${
                      isAscending ? "Descending" : "Ascending"
                    }`}
                  />
                )}
              </div>,
            ]}
          />
        </StyledContentWrapper>
      </PageShell>
    </StyledWrapper>
  );
};

export { App };
