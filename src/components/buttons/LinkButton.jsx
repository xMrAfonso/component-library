import React from "react";

const LinkButton = ({ children, ...props }) => {
    return (
        <button
            className="text-primary underline hover:text-primary-dark transition-colors"
            {...props}
        >
            {children}
        </button>
    );
};

export default LinkButton;
