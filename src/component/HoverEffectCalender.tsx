import { useEffect, useState } from "react";
import "./css/HoverCalender.css"

const HoverEffectCalender = () => {

    const [position, setPosition] = useState<null | { x: number, y: number }>()
    useEffect(() => {
        const eventFn = (event: MouseEvent) => {
            const x = event.clientX; // X position inside the viewport
            const y = event.clientY; // Y position inside the viewport

            setPosition({ x, y })
        }

        document.addEventListener("mousemove", eventFn);

        return () => document.removeEventListener("mousemove", eventFn)
    }, [])


    return (
        <div className="parent">
            <h1 style={{position:"relative",zIndex:"10"}}>xposition:{position?.x}<br />Yposition: {position?.y}</h1>
            <span style={{ left: position?.x ? position?.x - 40 : 0, top: position?.y ? position?.y - 40 : 0 }} className="circle"></span>
        </div>
    );
};

export default HoverEffectCalender;