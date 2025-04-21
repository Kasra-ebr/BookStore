import React, { useState } from "react";

import { useBookContext } from "./Hooks/BookContextProvider";

function Favourites() {
  const { favourites } = useBookContext();
  if (favourites?.length === 0) return;

  return (
    <div>
      <h1>Favourites :</h1>
      <div>
        {favourites?.map((fav) => {
          return (
            <div className="favourites_card" key={fav.id}>
              <p>{fav.title}</p>
              <img src={fav.image} alt={fav.title} width="100" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Favourites;
