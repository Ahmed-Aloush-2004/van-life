import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function VanDetail() {
  const params = useParams();
  const [van, setVan] = useState(null);
  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);
  // console.log(van);
  return (
    <div className="van-detail-container">
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h3>{van.name}</h3>
          <p className="van-price">
            ${van.price}
            <span>/day</span>
          </p>
          <p>{van.description}</p>
          <button type="button">Rent this van </button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default VanDetail;
