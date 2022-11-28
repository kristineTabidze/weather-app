import React from 'react';
import { IHeadingProps } from './types';

const Heading: React.FC<IHeadingProps> = ({level, size, weight, children}) => {
    return <p className={`heading heading--${level} heading--${size} heading--${weight}`}>{children}</p>;
}

export default Heading;