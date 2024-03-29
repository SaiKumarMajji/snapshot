import React from "react";

const Images = ({ initialImages }) => {
  console.log("Initial Images:", initialImages);

  if (!initialImages || initialImages.length === 0) {
    return <div>No images found</div>;
  }

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
};

export default Images;
