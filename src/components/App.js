import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])

  function renderListings(prop){
    setListings(prop)
  }

  return (
    <div className="app">
      <Header listings={listings}/>
      <ListingsContainer listings={listings} renderListings={(prop)=>renderListings(prop)}/>
    </div>
  );
}

export default App;
