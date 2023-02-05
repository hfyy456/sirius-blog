import {
  faChevronLeft,
  faChevronRight,
  faComputerMouse,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLoaded } from "../store/reducers/configSlice";
import "./photo.scss";
import json from "../utils/photo.json";
const indexKey = "sirius-photo-index";

export default function Photo(props: any) {
  const dispatch = useDispatch();
  const [showBar, setShowBar] = useState(true);
  const photos = JSON.parse(JSON.stringify(json)).photos;
  const i = localStorage.getItem(indexKey) || 0;
  const [curIndex, setCurIndex] = useState(i);
  const [curPhoto, setCurPhoto] = useState(photos[i]);
  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoaded());
    }, 500);
  }, []);
  const openBar = () => {
    setShowBar(!showBar);
  };
  const selectPhoto = (e: any, index: number) => {
    setCurIndex(index);
    setCurPhoto(photos[index]);
  };
  return (
    <div className="photo-container">
      <div className="img-loading alc">
        <FontAwesomeIcon icon={faSpinner} />
      </div>
      <img className="pt alc" src={`${curPhoto.url}`} />
      <div className={`bottom-bar ${showBar ? "upbar" : ""}`}>
        <div className="before-i" onClick={openBar}>
          <FontAwesomeIcon icon={faComputerMouse} />
        </div>
        <div className="bottom-list">
          <div className="left-arrow flc">
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          {photos.map((item: any, index: number) => {
            return (
              <div
                key={index}
                onClick={(e) => selectPhoto(e, index)}
                className={`bottom-item ${
                  curIndex == index ? "active-item" : ""
                }`}
              >
                <img src={`${item.url}?imageView2/1/w/300/h/200`} />
              </div>
            );
          })}

          <div className="right-arrow flc">
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
      </div>
    </div>
  );
}
