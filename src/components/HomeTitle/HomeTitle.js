import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { Image } from "../../components";
import spaceXLogo from "../../assets/img/spacex-logo.png";
import { colours } from "../../assets/tokens";

const StyledTitle = styled("h1")`
  color: ${colours.text};
  font-family: "Brandon Grotesque Regular";
  font-size: 20px;
  font-weight: 400;
  line-height: 1;
  margin: 0 0 0 -12px;
`;

const StyledWrapper = styled("div")`
  align-items: baseline;
  display: flex;
  height: fit-content;
`;

const HomeTitle = () => (
  <StyledWrapper>
    <Image
      alt="SpaceX Logo"
      height="22px"
      source={spaceXLogo}
      key="spacex-logo"
    />
    <StyledTitle>LAUNCHES</StyledTitle>
  </StyledWrapper>
);

HomeTitle.propTypes = {};

export { HomeTitle };
