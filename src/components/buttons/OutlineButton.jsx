import React from "react";

const OutlineButton = ({ children, ...props }) => {
    return (
        <button
            className="px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
            {...props}
        >
            {children}
        </button>
    );
};

export default OutlineButton;
