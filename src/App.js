import styled from "@emotion/styled";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import {
  Button,
  ButtonWrapper,
  Image,
  Inline,
  LaunchTable,
} from "./components";
import spaceXLogo from "./assets/img/spacex-logo.png";

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

const StyledWrapper = styled("div")`
  padding-left: 40px;
  padding-top: 24px;
`;

const App = () => {
  return (
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
        <Query query={getAllArticles}>
          {({ loading, error, data }) => {
            if (loading) return <p>Relax, it's worth the wait...</p>;
            if (error) return <p>Looks like we've got a problem...</p>;
            return <LaunchTable launchData={data.launches} />;
          }}
        </Query>
      </StyledContentWrapper>
    </StyledWrapper>
  );
};

export { App };
