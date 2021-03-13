import React from "react";
import PropTypes from "prop-types";

const Image = ({ alt, height, source, sourceSet, width }) => (
  <img
    alt={alt}
    height={height}
    src={source}
    srcSet={sourceSet}
    width={width}
  />
);

Image.propTypes = {
  /** Alternate text for image if the image cannot be displayed. */
  alt: PropTypes.string.isRequired,
  /** Image height. */
  height: PropTypes.string,
  /** Pass a single image. */
  source: PropTypes.string,
  /** Pass responsive images at multiple resolutions. */
  sourceSet: PropTypes.string,
  /** Image width. */
  width: PropTypes.string,
};

export { Image };
