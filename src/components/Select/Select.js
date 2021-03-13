import PropTypes from "prop-types";
import React from "react";
import styled from "@emotion/styled";
import { Image } from "../../components";
import SelectIcon from "../../assets/icon/select@3x.png";
import SelectIcon2x from "../../assets/icon/select@2x.png";
import SelectIcon3x from "../../assets/icon/select@3x.png";
import { colours } from "../../assets/tokens";

const StyledSelect = styled("select")`
  appearance: none;
  background-color: ${colours.primaryBlue};
  border: 2px solid ${colours.primaryBlue};
  color: ${colours.white};
  cursor: pointer;
  font-family: "Brandon Grotesque Bold";
  font-size: 16px;
  height: 43px;
  padding: 0 37px 0 16px;

  :focus,
  :hover {
    border-color: ${colours.grey};
    outline: 0;
  }
`;

const StyledWrapper = styled("div")`
  align-items: center;
  color: ${colours.white};
  display: inline-flex;
  height: min-content;
  position: relative;
  width: fit-content;

  img {
    pointer-events: none;
    position: absolute;
    right: 24px;
    top: 19px;
  }
`;

const Select = ({ id, onChange, selectedOption, selectOptions }) => (
  <StyledWrapper>
    <StyledSelect id={id} onChange={onChange} value={selectedOption}>
      {selectOptions.map((item, index) => {
        const key = `${id}-${index}`;
        return (
          <option key={key} value={item}>
            {item}
          </option>
        );
      })}
    </StyledSelect>
    <Image
      alt="Chevron down"
      height="5px"
      sourceSet={`
			${SelectIcon3x} 3x,
			${SelectIcon2x} 2x,
			${SelectIcon} 1x,
		`}
    />
  </StyledWrapper>
);

Select.propTypes = {
  /** Unique string id. */
  id: PropTypes.string,
  /** Callback function triggered on change. */
  onChange: PropTypes.func,
  /** Selected option. */
  selectedOption: PropTypes.string.isRequired,
  /** Array of string options. */
  selectOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export { Select };
