import React, { useState } from "react";

function Search({ listings }) {
  const [searchWord, setSearchWord] = useState("")


  function handleSubmit(e) {
    e.preventDefault();
    const filterListings = listings.filter(listing => listing.description.toLowerCase().includes(searchWord.toLowerCase()))
    console.log(filterListings);
    console.log("SW: ", searchWord)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
