import React from 'react';
const Key = ({ text, onKey }) => {
    return (React.createElement("div", { className: "w-8 h-8 bg-gray-700 text-white text-center leading-8 rounded-lg", onClick: () => onKey === null || onKey === void 0 ? void 0 : onKey(text) }, text));
};
export default Key;
