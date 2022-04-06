import React, { useState } from "react";
import MapContainer from "./MapContainer";
import * as S from "./StyledComponent"

const SearchPlace = () => {
  const [inputText, setInputText] = useState("");
  const [place, setPlace] = useState("");

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(inputText);
    setInputText("");
  };

  return (
    <>
      {/* <div style={{width: 100,background: "#000", height: 100, position: 'absolute', zIndex: 100000}}></div> */}
      <S.SearchBar className="inputForm" onSubmit={handleSubmit}>
        <input
          placeholder="Search Place..."
          onChange={onChange}
          value={inputText}
        />
        <button type="submit">검색</button>
      </S.SearchBar>
      <MapContainer searchPlace={place} />
    </>
  );
};

export default SearchPlace;