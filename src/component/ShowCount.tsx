
import React from "react";
const ShowCount = ({ tittle, count }: { tittle: string, count: number }) => {
    console.log( tittle)
    return (
        <div>
            {tittle} is {count} .
        </div>
    );
};

export default React.memo(ShowCount);