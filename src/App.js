import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageCard from "./components/imageCard";
import { SearchBox } from "./components/SearchBox";
function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [term, setTerm] = useState("");
  const [pixelUrl, setPixelUrl] = useState(
    `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXERBAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
  );

  useEffect(() => {
    setisLoading(true);
    axios
      .get(pixelUrl)
      .then((res) => res)
      .then(({ data }) => {
        setImages(data.hits);
        setisLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, [pixelUrl]);

  return (
    <div
      className={`flex px-6 py-4 flex-col h-screen ${
        isLoading && "justify-center"
      } `}
    >
      {isLoading ? (
        <div className="mx-auto align-middle loader border-purple-500 ease-linear rounded-full border-8 border-t-8  h-64 w-64"></div>
      ) : (
        <>
          <SearchBox setTerm={setTerm} setPixelUrl={setPixelUrl} />
          {images ? (
            <ImageCard images={images} setPixelUrl={setPixelUrl} />
          ) : (
            <div className="mx-auto ">No Images found</div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
