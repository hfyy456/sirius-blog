import React, { useState, useEffect } from "react"
import "./CommentList.scss"
import InputPanel from "./InputPanel"

import CommentItem from "./CommentItem"

export default function Comment(): JSX.Element {
    const [comment, setComment] = useState({
        nickname: "",
        url: "",
        content: "",
    })
    const [showCmt, setShowCmt] = useState(false)
    useEffect(() => {
        const local = localStorage.getItem("commentInfo")
        if (local !== null) {
            setComment(JSON.parse(local))
        }
    }, [])
    return (
        <div className="cmt-list-container">
            <div className="cmt-title">评论列表</div>
            <InputPanel comment={comment} setComment={setComment} />
            <div className="cmt-wrap">
                {!showCmt ? (
                    <div className="show-comment">查看评论</div>
                ) : (
                    <div className="list">
                        <CommentItem />
                        <CommentItem />
                        <CommentItem />
                    </div>
                )}
            </div>
        </div>
    )
}
