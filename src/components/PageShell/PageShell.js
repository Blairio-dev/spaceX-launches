import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const StyledWrapper = styled("div")`
  max-width: 1440px;
  padding-left: 40px;
  padding-top: 24px;
  width: 100vw;
`;

const PageShell = ({ children }) => <StyledWrapper>{children}</StyledWrapper>;

PageShell.propTypes = {
  children: PropTypes.node.isRequired,
};

export { PageShell };
