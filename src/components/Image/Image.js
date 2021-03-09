import React from "react";
import PropTypes from "prop-types";

const Image = ({ alt, height, imageUrl, width }) => (
  <img src={imageUrl} alt={alt} height={height} width={width} />
);

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
};

export { Image };
