import React, { useState } from "react";
import "./profileimage.css";

const ImageExpander = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="image-expander">
      <img
        src={
          "https://lh3.googleusercontent.com/p/AF1QipObLuTfHXV97Cv7GPlSyw-YBIv9LNYkDt0RZnVh=s680-w680-h510"
        }
        alt=""
        className={`image-expander__image${
          expanded ? " image-expander__image--expanded" : ""
        }`}
      />
      {expanded ? (
        <div className="image-expander__overlay">
          <button
            className="image-expander__close-button"
            onClick={() => setExpanded(false)}
          >
            ×
          </button>
        </div>
      ) : (
        <div className="change-photo">
          <button
            className="image-expander__view-button"
            onClick={() => setExpanded(true)}
          >
            Change Profile Photo
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageExpander;
