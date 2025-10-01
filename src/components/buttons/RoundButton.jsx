import React from "react";

const RoundButton = ({ children, ...props }) => {
    return (
        <button
            className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors"
            {...props}
        >
            {children}
        </button>
    );
};

export default RoundButton;
