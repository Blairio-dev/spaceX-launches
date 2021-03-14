import PropTypes from "prop-types";
import React from "react";
import styled from "@emotion/styled";
import { breakpoints, colours } from "../../assets/tokens";

const StyledContainer = styled("div")`
  background-color: ${colours.white};
  max-width: 1440px;
  padding-left: 40px;
  padding-top: 24px;
  width: 1440px;

  @media (max-width: ${breakpoints.sm}) {
    padding-left: 16px;
    padding-top: 16px;
  }
`;

const StyledWrapper = styled("div")`
  background-color: ${colours.primaryBlue};
  display: flex;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
`;

const PageShell = ({ children }) => (
  <StyledWrapper>
    <StyledContainer>{children}</StyledContainer>
  </StyledWrapper>
);

PageShell.propTypes = {
  /** Child page content. */
  children: PropTypes.node.isRequired,
};

export { PageShell };
