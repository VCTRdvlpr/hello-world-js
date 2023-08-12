import React from "react";


const ContentBtnComponent = ({ title, onClick }) => {
    return (
        <button className="navBtnStyle" onClick={onClick}>{title}</button>
    );
}

export default ContentBtnComponent;