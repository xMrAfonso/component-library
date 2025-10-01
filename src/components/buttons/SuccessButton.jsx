import React from "react";

const SuccessButton = ({ children, ...props }) => {
    return (
        <button
            className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors"
            {...props}
        >
            {children}
        </button>
    );
};

export default SuccessButton;
