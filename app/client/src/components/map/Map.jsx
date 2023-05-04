import axios from "axios";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import meLocation from "../../assets/1-location.png";
import youLocation from "../../assets/3-location.png";

const Map = () => {
  const curentUser = "Taifur";
  const [pins, setPins] = useState([]);
  console.log(pins);
  useEffect(() => {
    const getPins = async () => {
      const res = await axios.get("http://localhost:4000/api/pins");
      setPins(res.data);
    };
    getPins();
  }, []);

  const meIcon = new Icon({
    iconUrl: meLocation,
    iconSize: [45, 45],
    // iconAnchor: [1, 1],
    // popupAnchor: [-0, -76]
  });
  const youIcon = new Icon({
    iconUrl: youLocation,
    iconSize: [40, 40],
    // iconAnchor: [1, 1],
    // popupAnchor: [-0, -76]
  });

  return (
    <div>
      <MapContainer
        className="map"
        center={[51.505, -0.09]}
        zoom={3}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {pins.pins?.map((p) => {
          return (
            <Marker
              icon={p.username === curentUser ? meIcon : youIcon}
              key={p._id}
              position={[p.lat, p.long]}
            >
              <Popup minWidth={210}>
                <div className="card">
                  <div className="place">
                    <p>Place</p>
                    <h3>{p.title}</h3>
                  </div>
                  <div className="review">
                    <p>Review</p>
                    <span>{p.desc}</span>
                  </div>
                  <div className="rating">
                    <p>Rating</p>
                    <div className="star">
                      <AiFillStar color="gold" size={15} />
                      <AiFillStar color="gold" size={15} />
                      <AiFillStar color="gold" size={15} />
                      <AiFillStar color="gold" size={15} />
                      <AiFillStar color="gold" size={15} />
                    </div>
                  </div>
                  <div className="info">
                    <p>Information</p>
                    <span>
                      Created by <span className="username">{p.username}</span>{" "}
                    </span>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default Map;
