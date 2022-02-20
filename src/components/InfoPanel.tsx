import React from "react"
import "./InfoPanel.scss"
export default function InfoPanel(props: any): JSX.Element {
    const { content, nickname, url } = props

    return (
        <div className="info-panel-container">
            <div className="input-item">
                <label>昵称:</label>
                <input />
            </div>
            <div className="input-item">
                <label>网址:</label>
                <input className="url" placeholder="https://" />
            </div>
        </div>
    )
}
