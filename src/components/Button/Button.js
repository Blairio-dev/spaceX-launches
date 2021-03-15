import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { colours } from "../../assets/tokens";
import { Image } from "../../components";
import RefreshIcon from "../../assets/icon/refresh.png";
import RefreshIcon2x from "../../assets/icon/refresh@2x.png";
import RefreshIcon3x from "../../assets/icon/refresh@3x.png";
import SortIcon from "../../assets/icon/sort.png";
import SortIcon2x from "../../assets/icon/sort.png";
import SortIcon3x from "../../assets/icon/sort@2x.png";

const StyledButton = styled("button")`
  align-items: center;
  background: ${colours.primaryBlue};
  border: 2px solid ${colours.primaryBlue};
  ${(props) =>
    props.displayType === "roundedLeft" && "border-radius: 21.5px 0 0 21.5px;"}
  color: ${colours.white};
  cursor: pointer;
  display: inline-flex;
  height: 43px;
  justify-content: space-between;
  margin: 0;
  ${(props) => props.displayType === "standard" && "min-width: 163px;"}
  padding: 0 16px;
  transition: all 0.05s ease-out;

  :focus,
  :hover {
    border-color: ${colours.grey};
    outline: 0;
  }

  span {
    font-family: "Brandon Grotesque Bold";
    font-size: 16px;
    margin-top: 0;
  }

  img {
    margin-left: 8px;
  }
`;

const Base = ({
  displayType,
  iconHeight,
  iconSourceSet,
  labelText,
  onClick,
}) => (
  <StyledButton displayType={displayType} onClick={onClick} type="button">
    <span>{labelText}</span>
    <Image
      alt="Rocket launching"
      height={iconHeight}
      sourceSet={iconSourceSet}
    />
  </StyledButton>
);

const basePropTypes = {
  /** Callback function triggered on click. */
  onClick: PropTypes.func.isRequired,
};

Base.propTypes = {
  ...basePropTypes,
  /** Control button border styles. */
  displayType: PropTypes.oneOf(["standard", "roundedLeft"]).isRequired,
  /** Set the icon height in pixels. */
  iconHeight: PropTypes.string.isRequired,
  /** Set the button icons.
   * Pass responsive images at multiple resolutions. */
  iconSourceSet: PropTypes.string.isRequired,
  /** Label text. */
  labelText: PropTypes.string.isRequired,
};

const Reload = ({ onClick }) => (
  <Base
    displayType="roundedLeft"
    iconHeight="14px"
    iconSourceSet={`
      ${RefreshIcon3x} 3x,
      ${RefreshIcon2x} 2x,
      ${RefreshIcon} 1x,
    `}
    labelText="Reload Data"
    onClick={onClick}
  />
);

Reload.propTypes = {
  ...basePropTypes,
};

const Sort = ({ labelText, onClick }) => (
  <Base
    displayType="standard"
    iconHeight="18px"
    iconSourceSet={`
      ${SortIcon3x} 3x,
      ${SortIcon2x} 2x,
      ${SortIcon} 1x,
    `}
    labelText={labelText}
    onClick={onClick}
  />
);

Sort.propTypes = {
  ...basePropTypes,
  /** Label text. */
  labelText: PropTypes.string.isRequired,
};

const Button = {
  Reload,
  Sort,
};

export { Button };
