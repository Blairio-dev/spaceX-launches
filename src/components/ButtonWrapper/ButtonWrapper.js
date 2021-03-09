import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const StyledWrapper = styled("div")`
  margin-bottom: 13px;

  button {
    margin-right: 9px;

    :last-of-type {
      margin-right: 0px;
    }
  }
`;

const ButtonWrapper = ({ children }) => (
  <StyledWrapper>{children}</StyledWrapper>
);

ButtonWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ButtonWrapper };
