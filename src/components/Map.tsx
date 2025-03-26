import { memo, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  ZoomControl,
} from "react-leaflet";
import { Icon, LatLngLiteral } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

type MapType = "roadmap" | "satellite" | "hybrid" | "terrain";

type MapLocation = LatLngLiteral & { id: string };

type MapProps = {
  center: LatLngLiteral;
  locations: MapLocation[];
};

const SelectedLocation = ({ center }: { center: LatLngLiteral }) => {
  const map = useMap();
  map.panTo(center, { animate: true });
  return null;
};

export const Map: React.FC<MapProps> = memo(({ center, locations }) => {
  const [mapType, setMapType] = useState<MapType>("roadmap");
  const [selectedLocation, setSelectedLocation] = useState<
    MapLocation | undefined
  >();

  const getUrl = () => {
    const mapTypeUrls: Record<MapType, string> = {
      roadmap: "http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}",
      satellite: "http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}",
      hybrid: "http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}",
      terrain: "http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}",
    };
    return mapTypeUrls[mapType];
  };

  const mapMarkIcon = new Icon({
    iconUrl: "/taxi_slika.png",
    iconSize: [47, 55],
  });
  const mapMarkActiveIcon = new Icon({
    iconUrl: "/taxi_slika.png",
    iconSize: [57, 65],
  });

  const mapManIcon = new Icon({
    iconUrl: "/man.png",
    iconSize: [57, 65],
  });

  const renderMarks = () => {
    return locations.map((location) => {
      return (
        <div key={location.id}>
          <Marker
            icon={location.id === "2" ? mapMarkActiveIcon : mapManIcon}
            position={{ lat: location.lat, lng: location.lng }}
            eventHandlers={{
              click: () => {
                setSelectedLocation(location);
              },
            }}
          />
        </div>
      );
    });
  };

  return (
    <>
      <div
        style={{
          width: "95%",
          height: "90vh",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <MapContainer
          center={center}
          zoom={13}
          minZoom={5}
          zoomControl={false}
          attributionControl={false}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer url={getUrl()} />
          {selectedLocation && <SelectedLocation center={selectedLocation} />}
          {renderMarks()}
          <ZoomControl position="topright" />
        </MapContainer>
      </div>
      <div style={{ display: "flex", marginTop: "10px", gap: "20px" }}>
        <button
          className="my-2"
          onClick={() => setMapType("roadmap")}
        >
          Putna mapa
        </button>
        {/*
        <button
          className="my-2"
          onClick={() => setMapType("satellite")}
        >
          Satelit
        </button>
        */}
        <button
          className="my-2"
          onClick={() => setMapType("hybrid")}
        >
          Satelit

        {/*</button>
        <button
          className="my-2"
          onClick={() => setMapType("terrain")}
        >
          Teren
        </button>
        */}
        </button>
      </div>
    </>
  );
});
