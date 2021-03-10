import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { colours } from "../../assets/tokens";
import RefreshIcon from "../../assets/icon/refresh.png";
import RefreshIcon2x from "../../assets/icon/refresh@2x.png";
import RefreshIcon3x from "../../assets/icon/refresh@3x.png";
import SortIcon from "../../assets/icon/sort.png";
import SortIcon2x from "../../assets/icon/sort.png";
import SortIcon3x from "../../assets/icon/sort@2x.png";
import SelectIcon from "../../assets/icon/select@3x.png";
import SelectIcon2x from "../../assets/icon/select@2x.png";
import SelectIcon3x from "../../assets/icon/select@3x.png";

const StyledButton = styled("button")`
  align-items: center;
  background: ${colours.primaryBlue};
  border: none;
  ${(props) =>
    props.displayType === "roundedLeft" && "border-radius: 21.5px 0 0 21.5px;"}
  color: ${colours.white};
  cursor: pointer;
  display: inline-flex;
  height: min-content;
  padding: 10px 16px;

  :focus,
  :hover {
    outline: 0;

    img {
      transform: scale(1.15);
    }
  }

  span {
    font-family: "Brandon Grotesque Bold";
    font-size: 16px;
    margin-top: 0;
  }

  img {
    margin-left: 8px;
    transition: transform 0.05s ease-out;
  }
`;

const basePropTypes = {
  onClick: PropTypes.func.isRequired,
};

const Base = ({ displayType, iconSourceSet, labelText, onClick }) => (
  <StyledButton displayType={displayType} onClick={onClick} type="button">
    <span>{labelText}</span>
    <img alt="icon" srcSet={iconSourceSet} />
  </StyledButton>
);

Base.propTypes = {
  ...basePropTypes,
  displayType: PropTypes.oneOf(["standard", "roundedLeft"]).isRequired,
  iconSourceSet: PropTypes.node.isRequired,
  labelText: PropTypes.string.isRequired,
};

const Filter = ({ labelText, onClick }) => (
  <Base
    displayType="standard"
    iconSourceSet={`
      ${SelectIcon3x} 3x,
      ${SelectIcon2x} 2x,
      ${SelectIcon} 1x,
    `}
    labelText={labelText}
    onClick={onClick}
  />
);

Filter.propTypes = {
  ...basePropTypes,
  labelText: PropTypes.string.isRequired,
};

const Reload = ({ onClick }) => (
  <Base
    displayType="roundedLeft"
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
  labelText: PropTypes.string.isRequired,
};

const Button = {
  Filter,
  Reload,
  Sort,
};

export { Button };
