import React from "react";
import { useParams, NavLink, Outlet, Link } from "react-router-dom";

export default function HostVanDetail() {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, []);

  if (!currentVan) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <section>
        <NavLink to={".."} relative="path" className={"back-button"}>
          &larr;<span>Back to all vans</span>
        </NavLink>

        <div className="host-van-detail-layout-container">
          <div className="host-van-detail">
            <img src={currentVan.imageUrl} />
            <div className="host-van-detail-info-text">
              <i className={`van-type van-type-${currentVan.type}`}>
                {currentVan.type}
              </i>
              <h3>{currentVan.name}</h3>
              <h4>${currentVan.price}/day</h4>
            </div>
          </div>

          <nav className="host-van-detail-nav">
            <NavLink
              to="."
              end
              className={({ isActive }) => (isActive ? "active-link" : null)}
            >
              Details
            </NavLink>
            <NavLink
              to={"pricing"}
              className={({ isActive }) => (isActive ? "active-link" : null)}
            >
              Pricing
            </NavLink>
            <NavLink
              to={"photos"}
              className={({ isActive }) => (isActive ? "active-link" : null)}
            >
              Photos
            </NavLink>
          </nav>
          <Outlet context={{currentVan}} />
        </div>
      </section>
    </>
  );
}
