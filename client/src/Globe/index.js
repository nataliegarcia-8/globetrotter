import React from 'react';
import ReactGlobe from 'react-globe';
function MyGlobe() {
    // support rendering markers with simple data
    const markers = [
        {
            id: 'marker1',
            city: 'Singapore',
            color: 'red',
            coordinates: [1.3521, 103.8198],
            value: 50,
          },
          {
            id: 'marker2',
            city: 'New York',
            color: 'blue',
            coordinates: [40.73061, -73.935242],
            value: 25,
          },
          {
            id: 'marker3',
            city: 'San Francisco',
            color: 'orange',
            coordinates: [37.773972, -122.431297],
            value: 35,
          },
          {
            id: 'marker4',
            city: 'Beijing',
            color: 'gold',
            coordinates: [39.9042, 116.4074],
            value: 135,
          },
          {
            id: 'marker5',
            city: 'London',
            color: 'green',
            coordinates: [51.5074, 0.1278],
            value: 80,
          },
          {
            id: 'marker6',
            city: 'Los Angeles',
            color: 'gold',
            coordinates: [29.7604, -95.3698],
            value: 54,
          },
    ];
  
    // simple and extensive options to configure globe
    const options = {
      cameraRotateSpeed: 1,
      focusAnimationDuration: 1000,
      focusEasingFunction: ['Linear', 'None'],
      markerTooltipRenderer: marker => `${marker.city} (${marker.value})`,
    };
  
   
    
  
    // simple component usage
    return (
      <ReactGlobe
        height="50vh"
        globeBackgroundTexture="null"
        initialCoordinates={[1.3521, 103.8198]}
        markers={markers}
        options={options}
        width="100%"

      />
    )
  };

export default MyGlobe
