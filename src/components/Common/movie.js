import React from 'react'
import {Link} from 'react-router-dom'

export default (props) => (
  <Link to={`/movie?id=${props.id}`}>
    <div>{props.title}{" "}{props.rating.stars}{" "}{props.rating.average}</div>
    <div><img src={props.images.small} alt={props.alt} /></div>
  </Link>
)