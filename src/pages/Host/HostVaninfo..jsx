import React from "react";
import { useOutletContext } from "react-router-dom";

function HostVaninfo() {
  const { currentVan } = useOutletContext();
 console.log(currentVan);
  return (
    <section>
      <h4>{currentVan.name}</h4>
      <h4>Category:{currentVan.type}</h4>
      <h4>Description :{currentVan.description}</h4>
      <h4>Visibility : public</h4>
    </section>
  );
}

export default HostVaninfo;
