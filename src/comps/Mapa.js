import GoogleMapReact from "google-map-react";
import LocMarker from "./Marker";
const Mapa = ({ eventData, center, zoom }) => {
  console.log(eventData);
  const markers = eventData.map((ev) => {
    if (ev.categories[0].id === 8) {
      console.log(ev);
      return (
        <LocMarker
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
        />
      );
    }
    return null;
  });
  return (
    <div style={{ position: "relative" }}>
      <div style={{ width: "1400px", height: "500px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB9b1UDNdkTyW-HgDLxWoL1pa0GiNmZx6I" }}
          defaultCenter={center}
          defaultZoom={zoom}
          onGoogleApiLoaded={console.log(true)}
        >
          {/* <Marker lat={center.lat} lng={center.lng} /> */}
          {markers}
        </GoogleMapReact>
      </div>
    </div>
  );
};
Mapa.defaultProps = {
  center: {
    lat: 45.815,
    lng: 15.982,
  },
  zoom: 1,
};

export default Mapa;
