// import React from "react";

// export default function Images({ initialImages }) {
//   if (initialImages.length === 0) {
//     return (
//       <div>
//         <h3 className="notFound">No images found</h3> <br />{" "}
//         <p className="error">Please try with a different search term</p>
//       </div>
//     );
//   }
//   return (
//     <div>
//       {initialImages.map((image) => (
//         <img
//           className="pictures"
//           key={image.id}
//           src={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
//           alt={image.title}
//         />
//       ))}
//     </div>
//   );
// }

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
