import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { colours } from "../../assets/tokens";

const StyledBody = styled("span")`
  color: ${colours.text};
  font-family: "Brandon Grotesque Regular";
  font-size: 20px;
  font-weight: 400;
`;

const BodyText = ({ text }) => <StyledBody>{text}</StyledBody>;

BodyText.propTypes = {
  /** Body text. */
  text: PropTypes.string.isRequired,
};

export { BodyText };
