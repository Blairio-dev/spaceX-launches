import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const StyledWrapper = styled("div")`
  align-items: ${(props) => props.alignItems};
  display: flex;
  justify-content: ${(props) => props.justification};
  width: 100%;
`;

const getVerticalAlignment = (verticalAlignment) => {
  switch (verticalAlignment) {
    case "top":
      return "flex-start";
    case "bottom":
      return "flex-end";
    case "center":
      return "center";
    case "baseline":
      return "baseline";
    default:
      return "stretch";
  }
};

const BaseInline = ({ justification, nodes, verticalAlignment }) => (
  <StyledWrapper
    alignItems={getVerticalAlignment(verticalAlignment)}
    justification={justification}
  >
    {nodes.map((component) => component)}
  </StyledWrapper>
);

const baseProps = {
  nodes: PropTypes.arrayOf(PropTypes.node).isRequired,
  verticalAlignment: PropTypes.string,
};

BaseInline.propTypes = {
  ...baseProps,
  justification: PropTypes.string,
};

BaseInline.defaultProps = {
  verticalAlignment: "stretch",
};

const Justified = ({ nodes, verticalAlignment }) => (
  <BaseInline
    justification="space-between"
    nodes={nodes}
    verticalAlignment={verticalAlignment}
  />
);

Justified.propTypes = {
  ...baseProps,
};

const RightAligned = ({ nodes, verticalAlignment }) => (
  <BaseInline
    justification="flex-end"
    nodes={nodes}
    verticalAlignment={verticalAlignment}
  />
);

RightAligned.propTypes = {
  ...baseProps,
};

const Inline = {
  Justified,
  RightAligned,
};

export { Inline };
