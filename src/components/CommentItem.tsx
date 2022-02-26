import React from "react"
import "./CommentItem.scss"
import setDate from "../utils/date"

export default function CommentItem(props: any): JSX.Element {
    const { os, url, nickname, createTime, content, avatar } = props.info
    const { setComment, comment } = props
    const reply = (e: any) => {
        setComment({ ...comment, content: `@${nickname} ` })
    }
    return (
        <div className="cmt-container">
            <div className="avatar-con">
                <img src={avatar} />
            </div>
            <div className="cmt-meta">
                <div className="cmt-top">
                    {url.length > 1 ? (
                        <a href={url} className="cmt-username">
                            {nickname}
                        </a>
                    ) : (
                        <div className="cmt-username">{nickname}</div>
                    )}

                    <span className="cmt-date">{setDate(createTime)}</span>
                </div>
                <div className="cmt-desc">{content}</div>
            </div>
            <div className="cmt-action">
                <div className="action-item" onClick={reply}>
                    <i className="iconfont iconreply" />
                    <span>Reply</span>
                </div>
            </div>
            <div className="user-agent">{os}</div>
        </div>
    )
}
