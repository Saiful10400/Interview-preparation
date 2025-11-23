import React from 'react';

const CounterButton = ({ fn, children }: { children: React.ReactNode, fn: () => void }) => {
    console.log(children + "button")
    return (
        <button onClick={fn}>{children}</button>
    );
};

export default React.memo(CounterButton);