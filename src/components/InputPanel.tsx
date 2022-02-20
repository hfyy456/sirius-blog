import React, { useEffect } from "react"
import "./InputPanel.scss"
interface Iprops {
    nickname: string
    content: string
    url: string
}
export default function InputPanel(props: any): JSX.Element {
    const { comment, setComment } = props

    useEffect(() => {
        console.log(comment, props)
    })
    const submitComment = (e: any) => {
        setComment({ ...comment, content: "" })
        localStorage.setItem("commentInfo", JSON.stringify(comment))
    }
    const handleContentChange = (e: any) => {
        setComment({ ...comment, content: e.target.value })
    }
    const handleNicknameChange = (e: any) => {
        setComment({ ...comment, nickname: e.target.value })
    }
    const handleUrlChange = (e: any) => {
        setComment({ ...comment, url: e.target.value })
    }
    return (
        <>
            <div className="info-panel-container">
                <div className="input-item">
                    <label>昵称:</label>
                    <input
                        value={comment.nickname}
                        onChange={handleNicknameChange}
                    />
                </div>
                <div className="input-item">
                    <label>网址:</label>
                    <input
                        className="url"
                        placeholder="https://"
                        value={comment.url}
                        onChange={handleUrlChange}
                    />
                </div>
            </div>
            <div className="ipt-panel-container">
                <textarea
                    className="panel-textarea"
                    rows={4}
                    value={comment.content}
                    onChange={handleContentChange}
                ></textarea>
                <div className="submit-btn" onClick={submitComment}>
                    提交评论
                </div>
            </div>
        </>
    )
}
