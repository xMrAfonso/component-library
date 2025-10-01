import React from "react";

const DangerButton = ({ children, ...props }) => {
    return (
        <button
            className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors"
            {...props}
        >
            {children}
        </button>
    );
};

export default DangerButton;
