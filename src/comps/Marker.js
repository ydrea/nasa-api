import React from "react";
import locationIcon from "@iconify/icons-mdi/navigation-outline";
import { Icon } from "@iconify/react";

export default function LocMarker({ lat, lng, onClick }) {
  console.log(lat);
  return (
    <div onClick={onClick}>
      <Icon className="location-icon" icon={locationIcon} />
    </div>
  );
}
