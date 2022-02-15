import React from "react"
import "./InputPanel.scss"
export default function InputPanel(): JSX.Element {
    return (
        <div className="ipt-panel-container">
            <textarea className="panel-textarea" rows={4}></textarea>
            <div className="submit-btn">提交评论 </div>
        </div>
    )
}
