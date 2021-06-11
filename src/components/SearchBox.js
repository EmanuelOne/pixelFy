import React, { useState } from "react";
import icon from "../Assets/icons/search.svg";
export const SearchBox = ({ setPixelUrl }) => {
  const [input, setInput] = useState("");
  const handleSubmit = () => {
    setPixelUrl(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXERBAY_API_KEY}&q=${input}&image_type=photo&pretty=true`
    );

    window.scrollTo({ top: 0, behavior: "smooth" });

    setInput("");
  };
  return (
    <div className="group relative mx-auto my-4 bg-purple-white shadow rounded border-0 p-3 flex text-gray-600">
      <input
        type="text"
        className="outline-none group-focus:border-purple-500"
        onChange={(e) => {
          const { value } = e.target;
          setInput(value);
        }}
        onKeyPress={(e) => {
          const { key } = e;
          if (key === "Enter") {
            handleSubmit();
          }
        }}
        value={input}
      />
      <img
        src={icon}
        alt="search icon"
        className="hover:scale-50"
        onClick={() => {
          handleSubmit();
        }}
      />
    </div>
  );
};
