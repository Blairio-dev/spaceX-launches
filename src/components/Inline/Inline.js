import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { breakpoints } from "../../assets/tokens";

const StyledWrapper = styled("div")`
  align-items: ${(props) => props.alignItems};
  display: flex;
  justify-content: ${(props) => props.justification};
  width: 100%;

  @media (max-width: ${breakpoints.lg}) {
    flex-flow: wrap-reverse;
  }
`;

const getVerticalAlignment = (verticalAlignment) => {
  switch (verticalAlignment) {
    case "baseline":
      return "baseline";
    case "bottom":
      return "flex-end";
    case "center":
      return "center";
    case "top":
      return "flex-start";
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
  /** An array of components. */
  nodes: PropTypes.arrayOf(PropTypes.node).isRequired,
  /** Vertical alignment of components within flex containter. */
  verticalAlignment: PropTypes.oneOf([
    "baseline",
    "bottom",
    "center",
    "stretch",
    "top",
  ]),
};

BaseInline.propTypes = {
  ...baseProps,
  /** Jusification of components within flex containter. */
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
