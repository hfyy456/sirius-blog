import React, { useState, useEffect } from "react"
import "./Progress.scss"
export default function Progress(): JSX.Element {
    const [width, setWidth] = useState(50)
    useEffect(() => {
        document.addEventListener("scroll", setPercent)
        return function clean() {
            document.removeEventListener("scroll", setPercent)
        }
    }, [])
    function setPercent() {
        const windowHeight = document.body.clientHeight
        const documentHeight = document.documentElement.clientHeight
        const scrollHeight = document.documentElement.scrollTop
        const percent = scrollHeight / (windowHeight - documentHeight)
        setWidth(percent * 100)
    }
    return (
        <div className="progress-container">
            <div
                className="progress-inner"
                style={{ width: `${width}%` }}
            ></div>
        </div>
    )
}
