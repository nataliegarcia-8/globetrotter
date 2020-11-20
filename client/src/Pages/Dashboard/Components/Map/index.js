import React, { useState, useEffect } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import API from "../../../../utils/API";

const CustomSkinMap = withScriptjs(
  withGoogleMap((props) => {
    const [position, setPosition] = useState({ lat: 38.0902, lng: -95.7129 });
    const [markerState, setMarkerState] = useState([]);
    const [zoom, setZoom] = useState(3.8);
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
   

    const renderMarkers = () => {
      if(props.trips){
        return(
        props.trips.map((marker, i) => (
          <Marker
            onClick={() => zoomIntoMarkerHandler(marker)}
            key={i}
            position={{ lat: marker.lat, lng: marker.long }}
            zoomOnClick={true}
          />
        ))
      );
      } else {
        return;
      }
    }
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
                { saturation: -65 },
                { lightness: 8 },
                { hue: "#1900ff" },
              ],
            },
            {
              featureType: "road",
              elementType: "geometry.fill",
              stylers: [
                { hue: "#5e00ff" },
                { saturation: -79 },
                { lightness: 99 },
              ],
            },
            {
              featureType: "road",
              elementType: "geometry.stroke",
              stylers: [{ color: "#5e00ff" }, { lightness: 54 }],
            },
            {
              featureType: "landscape.man_made",
              elementType: "geometry.fill",
              stylers: [{ color: "#ece2d9" }],
            },
            {
              featureType: "poi.park",
              elementType: "geometry.fill",
              stylers: [{ visibility: "off " }],
            },
            {
              featureType: "road",
              elementType: "labels.text.fill",
              stylers: [{ color: "#f5f1e6" }],
            },
            {
              featureType: "road",
              elementType: "labels.text.stroke",
              stylers: [{ color: "#f5f1e6" }],
            },
            {
              featureType: "poi",
              stylers: [
                { saturation: -78 },
                { lightness: -17 },
                { hue: "#6600ff" },
                { visibility: "off " },
              ],
            },
            {
              featureType: "landscape.natural",
              elementType: "geometry.fill",
              stylers: [
                { visibility: "on" },
                { hue: "#6600ff" },
                { saturation: -11 },
              ],
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
        {renderMarkers()}
        {/* <Marker position={{ lat: 40.748817, lng: -73.985428 }} />
        <Marker position={{ lat: 37.0902, lng: -95.7129 }} /> */}
      </GoogleMap>
    );
  })
);
export default function Maps(props) {
  console.log("insidemaps", props.trips)
  return (
    <CustomSkinMap
      googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyAayUREzm6gydcCBnHzTXcnN4PsneoLays&libraries=places'
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `65vh` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      trips={props.trips}
    />
  );
}
