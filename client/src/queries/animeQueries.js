import gql from 'graphql-tag';

const getAnimesQuery = gql`
  query getAnimes($offset: Int){
    animes(offset: $offset) {
      id
      attributes {
        synopsis
        canonicalTitle
        startDate
        endDate
        ageRating
        posterImage {
          tiny
          small
          medium
          large
          original
        }
        showType
      }
    }
  }
`;

const getAnimeQuery = gql`
  query getAnime($id: ID){
    anime(id: $id) {
      id
      attributes {
        synopsis
        canonicalTitle
        startDate
        endDate
        ageRating
        posterImage {
          tiny
          small
          medium
          large
          original
        }
        coverImage {
          tiny
          small
          large
          original
        }
        showType
      }
    }
  }
`

export { getAnimesQuery, getAnimeQuery };