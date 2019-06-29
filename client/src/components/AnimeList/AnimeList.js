import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import AnimeListItem from '../AnimeListItem/AnimeListItem';
import Loading from '../Loader/Loading';

const AnimeList = (props) => {
  return (
    <InfiniteScroll
      dataLength={props.animes.length}
      next={props.onLoadMore}
      hasMore={true}
      scrollThreshold={.99}
      loader={<Loading />}
      className="row"
      style={{'overflow': 'hidden'}}
      endMessage={<p>Done</p>}
    >
      {props.animes.map((anime) => (
        <AnimeListItem key={anime.id} anime={anime} />
      ))}
    </InfiniteScroll>
  )
}

export default AnimeList

