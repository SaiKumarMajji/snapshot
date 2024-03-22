import React, { useState } from "react";
import "./App.css";
import Images from "./Images";
import axios from "axios";

const apiKey = "e92feedc2c143be65ad1d3177203e365";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedImages, setSearchedImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async (query) => {
    try {
      if (query && query.trim() !== "") {
        const response = await axios.get(
          `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
        );

        setSearchedImages(response.data.photos.photo);
        setSearchQuery(query);
      } else {
        setSearchedImages([]);
        setSearchQuery("");
      }
    } catch (error) {
      console.error("Error Fetching Images", error);
    }
  };

  const handleKeyPress = async (e) => {
    if (e.key === "Enter") {
      await handleSearch(searchTerm);
    }
  };

  const handleButtonClick = async (query) => {
    await handleSearch(query);
  };
  return (
    <div className="app">
      <h1>SnapShot</h1>

      <span className="search-icon">
        <input
          className="search-input"
          type="search"
          placeholder="search here..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <i className="fa-solid fa-magnifying-glass"></i>
      </span>
      <div className="buttons">
        <button onClick={() => handleButtonClick("mountains")}>
          Mountains
        </button>
        <button onClick={() => handleButtonClick("beach")}>Coastlines</button>
        <button onClick={() => handleButtonClick("birds")}>Birds</button>
        <button onClick={() => handleButtonClick("food")}>Food</button>
      </div>

      {searchQuery && (
        <div style={{ textAlign: "center" }}>
          <h2 className="title">{`${
            searchQuery.charAt(0).toUpperCase() + searchQuery.slice(1)
          } Pictures`}</h2>
          <Images initialImages={searchedImages} />
        </div>
      )}
    </div>
  );
}
