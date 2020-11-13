import React, { useState, useEffect } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import API from "../../utils/API";
const CustomSkinMap = withScriptjs(
  withGoogleMap((props) => {
    const [position, setPosition] = useState({ lat: 37.0902, lng: -95.7129 });
    const [markerState, setMarkerState] = useState([]);
    const [zoom, setZoom] = useState(4.5);
    const zoomIntoMarkerHandler = (coordinates) => {
      console.log("clicked");
      setZoom(zoom + 1);
      setPosition({ lat: coordinates.lat, lng: coordinates.long });
    };
    // useEffect(() => {
    //   setZoom(zoom+1);
    //   setZooming(false);
    // }, [zooming]);
    let count = 0;
    useEffect(() => {
      async function getTrips() {
        try {
          const results = await API.getTrips();
          console.log(results.data);
          setMarkerState((state) => [...state, ...results.data]);
        } catch (error) {}
      }
      getTrips();
    }, []);
    useEffect(() => {
      console.log(markerState);
    }, [markerState]);
    return (
      <GoogleMap
        defaultZoom={zoom}
        zoom={zoom}
        defaultCenter={position}
        center={position}
        defaultOptions={{
          scrollwheel: false,
          zoomControl: true,
          styles: [
            {
              featureType: "water",
              stylers: [
                { saturation: 43 },
                { lightness: -11 },
                { hue: "#0088ff" },
              ],
            },
            {
              featureType: "road",
              elementType: "geometry.fill",
              stylers: [
                { hue: "#ff0000" },
                { saturation: -100 },
                { lightness: 99 },
              ],
            },
            {
              featureType: "road",
              elementType: "geometry.stroke",
              stylers: [{ color: "#808080" }, { lightness: 54 }],
            },
            {
              featureType: "landscape.man_made",
              elementType: "geometry.fill",
              stylers: [{ color: "#ece2d9" }],
            },
            {
              featureType: "poi.park",
              elementType: "geometry.fill",
              stylers: [{ color: "#ccdca1" }],
            },
            {
              featureType: "road",
              elementType: "labels.text.fill",
              stylers: [{ color: "#767676" }],
            },
            {
              featureType: "road",
              elementType: "labels.text.stroke",
              stylers: [{ color: "#ffffff" }],
            },
            { featureType: "poi", stylers: [{ visibility: "off" }] },
            {
              featureType: "landscape.natural",
              elementType: "geometry.fill",
              stylers: [{ visibility: "on" }, { color: "#b8cb93" }],
            },
            { featureType: "poi.park", stylers: [{ visibility: "on" }] },
            {
              featureType: "poi.sports_complex",
              stylers: [{ visibility: "on" }],
            },
            { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
            {
              featureType: "poi.business",
              stylers: [{ visibility: "simplified" }],
            },
          ],
        }}
      >
        {markerState.map((marker, i) => (
          <Marker
            onClick={() => zoomIntoMarkerHandler(marker)}
            key={i}
            position={{ lat: marker.lat, lng: marker.long }}
            zoomOnClick={true}
          />
        ))}
        {/* <Marker position={{ lat: 40.748817, lng: -73.985428 }} />
        <Marker position={{ lat: 37.0902, lng: -95.7129 }} /> */}
      </GoogleMap>
    );
  })
);
export default function Maps() {
  return (
    <CustomSkinMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAayUREzm6gydcCBnHzTXcnN4PsneoLays&libraries=places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100vh` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
}