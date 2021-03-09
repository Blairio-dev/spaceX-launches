import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const StyledWrapper = styled("div")`
  align-items: center;
  display: flex;
  justify-content: ${(props) => props.justification};
  width: 100%;
`;

const BaseInline = ({ justification, nodes }) => (
  <StyledWrapper justification={justification}>
    {nodes.map((component) => component)}
  </StyledWrapper>
);

const baseProps = {
  nodes: PropTypes.arrayOf(PropTypes.node).isRequired,
};

BaseInline.propTypes = {
  ...baseProps,
  justification: PropTypes.string,
};

const Justified = ({ nodes }) => (
  <BaseInline justification="space-between" nodes={nodes} />
);

Justified.propTypes = {
  ...baseProps,
};

const RightAligned = ({ nodes }) => (
  <BaseInline justification="flex-end" nodes={nodes} />
);

RightAligned.propTypes = {
  ...baseProps,
};

const Inline = {
  Justified,
  RightAligned,
};

export { Inline };
