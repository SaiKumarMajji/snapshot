import React from "react";

export default function Images({ initialImages }) {
  return (
    <div className="image-container">
      {initialImages.map((image) => (
        <div className="image-wrapper" key={image.id}>
          <img
            className="pictures"
            src={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
            alt={image.title}
          />
        </div>
      ))}
    </div>
  );
}
