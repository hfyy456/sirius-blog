import React from "react"
import "./CommentItem.scss"
export default function CommentItem(): JSX.Element {
    return (
        <div className="cmt-container">
            <div className="avatar-con">
                <img
                    src={"http://www.uikitcss.com/skin/ukv3/images/avatar.jpg"}
                />
            </div>
            <div className="cmt-meta">
                <div className="cmt-top">
                    <span className="cmt-username">Socrates</span>
                    <span className="cmt-date">Feb 15,2022</span>
                </div>
                <div className="cmt-desc">
                    Beijing ByteDance Technology Co., Ltd. is an enterprise
                    located in China. ByteDance has products such as TikTok,
                    Toutiao, volcano video and Douyin (the Chinese version of
                    TikTok).
                </div>
            </div>
            <div className="cmt-action"></div>
        </div>
    )
}
