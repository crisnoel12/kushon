import React from 'react'
import { transformDate, trimSynopsis } from '../../utilities';
import { Link } from 'react-router-dom';
import './AnimeListItem.css'

const AnimeListItem = ({anime: {
  id,
  attributes: {
    synopsis, 
    canonicalTitle, 
    startDate, 
    endDate, 
    ageRating, 
    posterImage: {
      small
    },
    showType
  }
}}) => {

  return (
    <div className="col-md-6 col-lg-4 col-xl-3 card">
      <img src={small} alt={`${canonicalTitle} poster.`} className="img-fluid" />
      <div className="card-body">
        <h3 className="card-title font-weight-bold">{canonicalTitle}</h3>
        <hr/>
        <div className="text-left card-details">
          Rated: <span className="badge badge-dark text-orange">{ageRating}</span><br/>
          Type: <span className="badge badge-dark text-orange">{showType.toUpperCase()}</span><br />
          From: <span className="badge badge-success text-left">{transformDate(startDate)}</span><br/>
          To: <span className="badge badge-danger text-left">{transformDate(endDate)}</span>
        </div>
        <hr/>
        <p className="card-text">{`${trimSynopsis(synopsis)}...`}</p>
        <Link to={`anime/${id}`} className="btn btn-maroon">Read Full Synopsis</Link>
      </div>
    </div>
  )

}

export default AnimeListItem
