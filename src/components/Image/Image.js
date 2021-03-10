import React from "react";
import PropTypes from "prop-types";

const Image = ({ alt, height, source, sourceSet, width }) => (
  <img
    alt={alt}
    height={height}
    src={source}
    srcset={sourceSet}
    width={width}
  />
);

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  height: PropTypes.string,
  source: PropTypes.string.isRequired,
  sourceSet: PropTypes.string,
  width: PropTypes.string,
};

export { Image };
