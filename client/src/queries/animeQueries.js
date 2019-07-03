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
          small
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
        }
        coverImage {
          large
        }
        showType
      }
    }
  }
`

export { getAnimesQuery, getAnimeQuery };