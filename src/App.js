import styled from "@emotion/styled";
import { Button, Image, Inline } from "./components";
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
      <Inline.RightAligned
        nodes={[
          <Button.Filter labelText="Filter by Year" />,
          <Button.Sort labelText="Sort Descending" />,
        ]}
      />
    </StyledContentWrapper>
  </StyledWrapper>
);

export { App };
