import React from "react";
import "./Skeleton.css";

const Skeleton = ({ loading }) => {
  return (
    <div>
      {loading ? (
        <div className="container">
          <div className="skeleton">
            {Array(6)
              .fill("")
              .map((_, inx) => (
                <div key={inx} className="skeleton__item">
                  <div className="skeleton__img"></div>
                  <div className="skeleton__title"></div>
                  <div className="skeleton__text"></div>
                  <div className="skeleton__items">
                    <div className="skeleton__item1"></div>
                    <div className="skeleton__item1"></div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Skeleton;
