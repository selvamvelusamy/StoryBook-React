import React from 'react';

import PropTypes from 'prop-types';


/**
 * This is sample square
 */

export const Square = ({height, width, color, border, background, text, ...props}) => {
    <div
    style={{
        height: height,
        width: width,
        color: color,
        border: `${border === 'thin' ? '2px' : border === 'medium' ? '4px' : '6px'} solid #000`,
        backgroundColor: background
    }}
    >{text}</div>
}

Square.propTypes = {
    /**
     * Height can increase height
     */
    height: PropTypes.number.isRequired,
    /**
     * Width can increase wide
     */
    width: PropTypes.number.isRequired,

    /**
     * Color can increase beauty
     */
    color: PropTypes.string,

    /**
     * Border is also a action
     */
    border: PropTypes.oneOf(['thin', 'medium', 'thick']).isRequired,

    /**
     * Background color will fill the area
     */
    background: PropTypes.string,

    /**
     * This text will filled inside the container
     */
    text: PropTypes.string
}

Square.defaultProps = {
    height: 100,
    width: 100,
    background: 'red',
    border: 'thin'
}