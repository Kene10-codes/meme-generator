import { useEffect, useState } from "react"

export default function WindowTracker() {
    const [innerWidth,setInnerWidth] = useState(window.innerWidth)

    useEffect(()=> {
        const maxWidth = function(){
            setInnerWidth(window.innerWidth)
        }
        window.addEventListener("resize", maxWidth)
        return (function() {
            window.removeEventListener("resize", maxWidth)
        })
    }, [])
    return (
        <h1>Window width: {innerWidth}</h1>
    )
}
