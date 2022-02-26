import React, { useState, useEffect } from "react"
import "./CommentList.scss"
import InputPanel from "./InputPanel"
import service from "../utils/fetch"
import { useParams } from "react-router"
import CommentItem from "./CommentItem"
interface Iparams {
    id: string
}
export default function Comment(): JSX.Element {
    const [comment, setComment] = useState({
        nickname: `匿名用户${getRandomWord()}`,
        url: "",
        content: "",
    })
    const [showCmt, setShowCmt] = useState(false)
    const [commentList, setCommentLIst] = useState([])
    const routerParams: Iparams = useParams()

    useEffect(() => {
        const local = localStorage.getItem("commentInfo")
        if (local !== null) {
            setComment(JSON.parse(local))
        }
    }, [])
    const getCommentList = (e: any) => {
        service.post("comment/list", routerParams).then((res: any) => {
            setCommentLIst(res.data)
            setShowCmt(true)
        })
    }
    function getRandomWord() {
        var str = "abcdefghijklmnopqrstuvwxyz"
        var n = 5,
            s = ""
        for (var i = 0; i < n; i++) {
            var rand = Math.floor(Math.random() * str.length)
            s += str.charAt(rand)
        }
        return s
    }
    return (
        <div className="cmt-list-container">
            <div className="cmt-title">评论列表</div>
            <InputPanel
                comment={comment}
                setComment={setComment}
                getCommentList={getCommentList}
            />
            <div className="cmt-wrap">
                {!showCmt ? (
                    <div className="show-comment" onClick={getCommentList}>
                        查看评论
                    </div>
                ) : commentList.length > 0 ? (
                    <div className="list">
                        {commentList.map((item: any, index) => {
                            return (
                                <CommentItem
                                    info={item}
                                    key={index}
                                    setComment={setComment}
                                    comment={comment}
                                />
                            )
                        })}
                    </div>
                ) : (
                    <div className="no-list">暂无评论哦～</div>
                )}
            </div>
        </div>
    )
}
