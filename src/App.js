import styled from "@emotion/styled";
import { Button } from "./components";

const StyledWrapper = styled("div")`
  padding-left: 40px;
  padding-top: 24px;
`;

const App = () => (
  <StyledWrapper>
    <Button.Reload />
    <Button.Filter labelText="Filter by Year" />
    <Button.Sort labelText="Sort Descending" />
  </StyledWrapper>
);

export { App };
