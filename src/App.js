import styled from "@emotion/styled";
import { Button, Inline } from "./components";

const StyledWrapper = styled("div")`
  padding-left: 40px;
  padding-top: 24px;
`;

const App = () => (
  <StyledWrapper>
    <Inline.Justified nodes={[<Button.Reload />]} />
    <Inline.RightAligned
      nodes={[
        <Button.Filter labelText="Filter by Year" />,
        <Button.Sort labelText="Sort Descending" />,
      ]}
    />
  </StyledWrapper>
);

export { App };
