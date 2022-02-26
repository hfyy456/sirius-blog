import React, { useEffect } from "react"
import "./InputPanel.scss"
import service from "../utils/fetch"
import { useParams } from "react-router"
import UAParser from "ua-parser-js"
interface Iparams {
    id: string
}
interface Iprops {
    nickname: string
    content: string
    url: string
}
export default function InputPanel(props: any): JSX.Element {
    const { comment, setComment, getCommentList } = props
    const routerParams: Iparams = useParams()
    const parser = new UAParser()
    const ua = parser.getResult()
    const os = `${ua.browser.name} ${ua.browser.version} | ${ua.os.name} ${ua.os.version}`
    useEffect(() => {})

    const submitComment = (e: any) => {
        const params = {
            ...comment,
            aid: routerParams?.id,
            pid: 0,
            os: os,
            avatar: "//qiniu.hfsblog.com/36034bbae8774a77d3b15d04a38a38f8.jpeg",
        }
        service.post("comment/create", params).then((res: any) => {
            setComment({ ...comment, content: "" })
            const p = {
                ...comment,
                content: "",
            }
            localStorage.setItem("commentInfo", JSON.stringify(p))
            getCommentList()
        })
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
                        placeholder="匿名用户"
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
                    placeholder="说点什么吧..."
                ></textarea>
                <div className="submit-btn" onClick={submitComment}>
                    提交评论
                </div>
            </div>
        </>
    )
}
