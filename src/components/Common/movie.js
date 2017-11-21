import React from 'react'

export default (props) => (
  <div>
    <div>{props.title}{" "}{props.rating.stars}{" "}{props.rating.average}</div>
    <div><img src={props.images.small} alt={props.alt} /></div>
  </div>
)