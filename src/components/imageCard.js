import React from "react";

const ImageCard = ({ images, setPixelUrl }) => {
  return (
    <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid gap:2 sm:gap-6 ">
      {images.map((image, i) => {
        let { tags } = image;
        tags = tags.split(",");
        return (
          <div
            key={i}
            className="max-w-sm rounded overflow-hidden shadow-lg mx-auto "
          >
            <img
              src={image.webformatURL}
              className="w-full h-64 object-cover"
              alt={image.user}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-purple-500 text-xl mb-2">
                {" "}
                Photo by {image.user}
              </div>
              <ul>
                <li>
                  <strong>Views:</strong>
                  {image.views}
                </li>
                <li>
                  <strong>Download:</strong>
                  {image.downloads}
                </li>
                <li>
                  <strong>Likes:</strong>
                  {image.likes}
                </li>
              </ul>
            </div>
            <div className="px-6 py-6 flex gap-1 flex-wrap">
              {tags.map((e, i) => (
                <span
                  key={i}
                  className="inline-block rounded-full text-sm font-semibold bg-gray-200 px-3 py-1 text-gray-700 mr-2 cursor-pointer hover:bg-gray-500"
                  onClick={() => {
                    setPixelUrl(
                      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXERBAY_API_KEY}&q=${e}&image_type=photo&pretty=true`
                    );
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  #{e}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ImageCard;
