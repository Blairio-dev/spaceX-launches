import styled from "@emotion/styled";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { Button, Image, Inline, LaunchTable, PageShell } from "./components";
import launchHome from "./assets/img/launch-home.png";
import launchHome2x from "./assets/img/launch-home@2x.png";
import launchHome3x from "./assets/img/launch-home@3x.png";
import spaceXLogo from "./assets/img/spacex-logo.png";
import { colours } from "./assets/tokens";

const getAllArticles = gql`
  {
    launches {
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
  height: 100%;
  justify-content: center;
`;

const App = () => {
  return (
    <StyledWrapper>
      <PageShell>
        <StyledHeaderWrapper>
          <Inline.Justified
            nodes={[
              <Image
                alt="SpaceX Logo"
                height="22px"
                source={spaceXLogo}
                key="spacex-logo"
              />,
              <Button.Reload key="button-reload" />,
            ]}
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
              <Query query={getAllArticles} key="rocket-data">
                {({ loading, error, data }) => {
                  if (loading) return <p>Fetching launch data...</p>;
                  if (error) return <p>Houston, we have a problem...</p>;
                  return <LaunchTable launchData={data.launches} />;
                }}
              </Query>,
            ]}
          />
        </StyledContentWrapper>
      </PageShell>
    </StyledWrapper>
  );
};

export { App };
