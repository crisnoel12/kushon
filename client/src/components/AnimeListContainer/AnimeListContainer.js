import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { getAnimesQuery } from '../../queries/animeQueries';
import AnimeList from '../AnimeList/AnimeList';
import Loading from '../Loader/Loading';

class AnimeListContainer extends Component {
  state = {
    offset: 0 // offset num to pass when querying for anime list
  }
  render() {
    return (
      <Query query={getAnimesQuery} variables={{ offset: this.state.offset }}>
        {({ loading, error, data, fetchMore }) => {
          if (loading) return <Loading/>
          if (error) console.log(error);
          return (
            <AnimeList
              animes={data.animes}
              entries={data.animes || []}
              onLoadMore={() =>
                fetchMore({
                  variables: {
                    offset: data.animes.length
                  },
                  updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult) return prev;
                    return Object.assign({}, prev, {
                      animes: [...prev.animes, ...fetchMoreResult.animes]
                    });
                  }
                })
              }
            />
          )
        }}
      </Query>
    )
  }
}

export default AnimeListContainer
