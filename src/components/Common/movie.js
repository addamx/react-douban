import React from 'react'
import {Link} from 'react-router-dom'
import Rating from './Rating'
import Collect from './Collect'

export default (props) => (
  <div className="movie-item">
    <Link to={`/movie?id=${props.id}`}>
      <div className="post"><img src={props.images.small} /></div>
      <div className="details">
        <div className="title">{props.title}</div>
        <div className="rating"><Rating readonly={true} rating={props.rating.stars / 10} avertage={props.rating.average}/></div>
        <div className="director">导演: {props.directors.map((el)=>{
          return el.name;
        }).join(' / ')}</div>
        <div className="casts">主演: {props.casts.map((el) => {
          return el.name;
        }).join(' / ')}</div>
      </div>
    </Link>
  </div>
)
