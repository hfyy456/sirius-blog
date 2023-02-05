import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLoaded } from "../store/reducers/configSlice";
import "./album.scss";
import Topbar from "../components/Topbar";
import { useHistory } from "react-router-dom";
import json from "../utils/photo.json";
const indexKey = "sirius-photo-index";
export default function Album() {
  const dispatch = useDispatch();
  const history = useHistory();
  const photos = JSON.parse(JSON.stringify(json)).photos;
  const firPhoto = photos.splice(0, 1)[0];
  const rightPhotos = photos.splice(0, 4);
  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoaded());
    }, 500);
  }, []);
  const openPhoto = (e: any, index: number) => {
    localStorage.setItem(indexKey, index);
    history.push({
      pathname: "/photo",
    });
  };
  return (
    <div className="cnt">
      <Topbar />
      <div className="album-container">
        <div className="fir-con">
          <div className="left-con">
            <div className="top-card mt1">
              <div
                className="pc-in"
                onClick={(e) => openPhoto(e, 0)}
                style={{
                  backgroundImage: `url(${`${firPhoto?.url}?imageView2/1/w/1320/h/760`})`,
                }}
              ></div>
              <div className="pc-info">
                <div className="pc-name">❤️ Welcome to Gradient ❤️</div>
                <div className="pc-date">October 14 2018</div>
              </div>
            </div>
          </div>
          <div className="right-con">
            {rightPhotos.map((item, index) => {
              return (
                <div key={index} className="other-card mt1">
                  <div
                    className="pc-in"
                    onClick={(e) => openPhoto(e, index + 1)}
                    style={{
                      backgroundImage: `url(${item.url}?imageView2/1/w/640/h/380)`,
                    }}
                  ></div>
                  <div className="pc-info">
                    <div className="pc-name">❤️ Welcome to Gradient ❤️</div>
                    <div className="pc-date">October 14 2018</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="next-con">
          {photos.map((item, index) => {
            return (
              <div key={index} className="other-card mt2">
                <div
                  className="pc-in"
                  onClick={(e) => openPhoto(e, index + 5)}
                  style={{
                    backgroundImage: `url(${item.url}?imageView2/1/w/640/h/380)`,
                  }}
                ></div>
                <div className="pc-info">
                  <div className="pc-name">❤️ Welcome to Gradient ❤️</div>
                  <div className="pc-date">October 14 2018</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
