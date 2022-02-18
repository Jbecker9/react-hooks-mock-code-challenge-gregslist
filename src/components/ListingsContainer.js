import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [listings, setListings] = useState([])

  useEffect(()=>{
    fetch("http://localhost:6001/listings")
      .then((r)=>r.json())
      .then((listings) => setListings(listings))
  }, [])

  function deleteListing(prop){
    const newDelListings = listings.filter((listing)=>listing.id !== prop.id)
    setListings(newDelListings)
  }


  return (
    <main>
      <ul className="cards">
        {listings.map((listing)=>
          <ListingCard deleteListing={(prop)=>deleteListing(prop)} key={listing.id} listing={listing}/>
        )}
      </ul>
    </main>
  );
}

export default ListingsContainer;
