import React from "react";
import "./postCard.scss";
import { NavLink } from "react-router-dom";
import setDate from "../utils/date";
import LazyLoad from "react-lazyload";
import { faEye, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface Iprops {
  id: string;
  title: string;
  thumbnail: string;
  date: string;
  categories: Array<string>;
  summary: string;
  visits: number;
}
const PostCard: React.FC<Iprops> = (props) => {
  const { id, title, thumbnail, date, categories, summary, visits } = props;
  return (
    <div className="card-container">
      <div className="card-cover">
        <NavLink to={`/article/${id}`}>
          <LazyLoad
            once
            style={{ height: "100%", width: "100%" }}
            placeholder={
              <img
                width="100%"
                height="100%"
                style={{ objectFit: "cover" }}
                alt="logo"
              />
            }
          >
            <img alt="cover" src={thumbnail} />
          </LazyLoad>
        </NavLink>
      </div>
      <div className="card-info">
        <NavLink className="link-active" to={`/article/${id}`}>
          <h3 className="arti-title">{title}</h3>
        </NavLink>
        <section className="arti-preview">{summary}</section>
        <div className="arti-date">{setDate(date)}</div>
        <div className="arti-tags">{categories}</div>
        <div className="arti-infos">
          <div className="info-item">
            <FontAwesomeIcon icon={faEye} />
            阅读：
            {visits}
            <FontAwesomeIcon className='re' icon={faComment} />
            评论： 0
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostCard;
