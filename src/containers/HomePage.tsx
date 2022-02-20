import React, { useEffect, useState } from "react"
import PostCard from "../components/postCard"
import "./Home.scss"
import service from "../utils/fetch"
import { useDispatch } from "react-redux"
import { setLoaded } from "../store/reducers/configSlice"
export default function Home() {
    const dispatch = useDispatch()
    const [postList, setPostList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        let params = {}
        service.post("article/list", params).then((res: any) => {
            setPostList(res.data)
            dispatch(setLoaded())
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const loadMore = (e: any) => {
        if (isLoading) {
            return
        }
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }
    return (
        <>
            <main className="home-page">
                <div className="post-list" id="post">
                    {postList.map((item: any, index) => {
                        return (
                            <div className="post-item" key={index}>
                                <PostCard
                                    id={item._id}
                                    title={item.title}
                                    visits={item.visits}
                                    thumbnail={item.thumbnail}
                                    date={item.createTime}
                                    summary={item.summary}
                                    categories={item.categories}
                                />
                            </div>
                        )
                    })}
                </div>
                <div className="load-more" onClick={loadMore}>
                    加载更多
                    {!isLoading ? (
                        <></>
                    ) : (
                        <div className="spinner">
                            <div className="spinner-container container1">
                                <div className="circle1"></div>
                                <div className="circle2"></div>
                                <div className="circle3"></div>
                                <div className="circle4"></div>
                            </div>
                            <div className="spinner-container container2">
                                <div className="circle1"></div>
                                <div className="circle2"></div>
                                <div className="circle3"></div>
                                <div className="circle4"></div>
                            </div>
                            <div className="spinner-container container3">
                                <div className="circle1"></div>
                                <div className="circle2"></div>
                                <div className="circle3"></div>
                                <div className="circle4"></div>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </>
    )
}
