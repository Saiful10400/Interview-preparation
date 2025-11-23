import React from "react";

const Tittle = () => {
    console.log("rendered Tittle")
    return (
        <div style={{ fontSize: "30px", textDecoration: "bold" }}>
            Use memo tittle.
        </div>
    );
};

export default React.memo(Tittle);