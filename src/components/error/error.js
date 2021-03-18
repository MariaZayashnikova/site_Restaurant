import React from 'react';
import img from './error.jpg';
import './error.scss';

const Error = () => {
    return (
        <div className="error">
            <div className="error_text"><span>Something goes wrong</span></div>
            <img className="error_img" src={img} alt='Error'></img>
        </div>
    )
}
export default Error;