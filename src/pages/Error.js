import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
    // Assuming initialState is defined somewhere in your code
    const [values, setValues] = useState(initialState);

    return (
        <Wrapper className="full-page">
            <div className="error-container">
                <img src={img} alt="not found" className="error-image" />
                <p className="error-message">We can't seem to find the page you're looking for</p>
                <Link to="/" className="back-home-link">Back Home</Link>
            </div>
        </Wrapper>
    );
};

export default Error;
