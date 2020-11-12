import React from 'react'

const TripCard = (props) => {
    return (
        // <div style={{backgroundImage: `url(${props.image})`,}}>
          <a style={{backgroundImage: `url(${props.image})`,height: "300px", backgroundSize:"auto", textAlign:"center"}} href={props.href}>{props.text}</a>
        // </div>
    )
}

export default TripCard