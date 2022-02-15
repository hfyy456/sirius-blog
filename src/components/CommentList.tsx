import React from "react"
import "./CommentList.scss"
import InputPanel from "./InputPanel"
import CommentItem from "./CommentItem"

export default function Comment(): JSX.Element {
    return (
        <div className="cmt-list-container">
            <div className="cmt-title">评论列表</div>
            <InputPanel />
            <div className="cmt-wrap">
                <CommentItem />
                <CommentItem />
                <CommentItem />
            </div>
        </div>
    )
}
