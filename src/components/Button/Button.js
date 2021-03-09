import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { colours } from "../../assets/tokens";

import RefreshIcon from "../../assets/icon/refresh.png";
import SortIcon from "../../assets/icon/sort.png";
import SelectIcon from "../../assets/icon/select.png";

const StyledButton = styled("button")`
  align-items: center;
  background: ${colours.primaryBlue};
  border: none;
  ${(props) =>
    props.displayType === "roundedLeft" && "border-radius: 21.5px 0 0 21.5px;"}
  color: ${colours.white};
  cursor: pointer;
  display: inline-flex;
  font-family: Brandon Grotesque;

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

const Base = ({ displayType, iconSrc, labelText, onClick }) => (
  <StyledButton displayType={displayType} onClick={onClick} type="button">
    <span>{labelText}</span>
    <img src={iconSrc} alt="icon" />
  </StyledButton>
);

Base.propTypes = {
  ...basePropTypes,
  displayType: PropTypes.oneOf(["standard", "roundedLeft"]).isRequired,
  iconSrc: PropTypes.node.isRequired,
  labelText: PropTypes.string.isRequired,
};

const Filter = ({ labelText, onClick }) => (
  <Base
    displayType="standard"
    iconSrc={SelectIcon}
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
    iconSrc={RefreshIcon}
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
    iconSrc={SortIcon}
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
