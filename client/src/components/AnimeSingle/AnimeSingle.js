import React, { Fragment } from 'react'
import { Query } from 'react-apollo';
import { transformDate } from '../../utilities';
import { getAnimeQuery } from '../../queries/animeQueries';
import Loading from '../Loader/Loading';
import './AnimeSingle.css';

const AnimeSingle = (props) => {
  let { id } = props.match.params;
  id = parseInt(id);

  const goBack = () => {
    props.history.goBack();
  }

  return (
    <Query query={getAnimeQuery} variables={{ id }}>
      {({ loading, error, data }) => {       
        if (loading) return <Loading />;
        if (error) console.log(error);

        const {
          attributes: {synopsis,canonicalTitle,startDate,endDate,ageRating,posterImage:{tiny},showType}
        } = data.anime;

        const styles = {
              'backgroundImage': (data.anime.attributes.coverImage) ? `url(${data.anime.attributes.coverImage.large})` : null,
              'backgroundPosition': 'center',
              'backgroundRepeat': 'no-repeat',
              'backgroundSize': 'cover',
              'height': '260px',
              'backgroundBlendMode': 'overlay',
              'backgroundColor': 'rgba(0, 0, 0, 0.8)',
            }
        
        return (
          <Fragment>
            <div className="row mb-2">
              <div className="col-12">
                <div className="animeCover" style={styles}>
                  <h1>{canonicalTitle}</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 pr-1">
                <div className="p-2 bg-white">
                  <img src={tiny} alt="" /><br/>
                  Rating: <span className="badge badge-dark text-orange">{ageRating}</span><br/>
                  Type: <span className="badge badge-dark text-orange">{showType}</span><br/>
                  From: <span className="badge badge-success">{transformDate(startDate)}</span><br/>
                  To: <span className="badge badge-danger">{transformDate(endDate)}</span><br/>
                  <hr/>
                  <button onClick={() => goBack()} className="btn btn-outline-danger btn-sm text-center">&larr; Go Back</button>
                </div>
              </div>
              <div className="col-md-8 pl-0">
                <div className="p-5 bg-white">
                  <h2>Synopsis</h2>
                  <p className="prewrap">{synopsis.replace(/(?:\r\n|\r|\n)/g, "\n\n")}</p>
                </div>
              </div>
            </div>
          </Fragment>
        );
      }}
    </Query>
  )
}

export default AnimeSingle
