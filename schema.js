const graphql = require('graphql');
const axios = require('axios');

const baseUrl = 'https://kitsu.io/api/edge/anime';

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} = graphql;

const PosterImageType = new GraphQLObjectType({
  name: 'PosterImage',
  fields: () => ({
    tiny: {
      type: GraphQLString
    },
    small: {
      type: GraphQLString
    },
    medium: {
      type: GraphQLString
    },
    large: {
      type: GraphQLString
    },
    original: {
      type: GraphQLString
    },
  })
});

const CoverImageType = new GraphQLObjectType({
  name: 'CoverImage',
  fields: () => ({
    tiny: {
      type: GraphQLString
    },
    small: {
      type: GraphQLString
    },
    large: {
      type: GraphQLString
    },
    original: {
      type: GraphQLString
    },
  })
});

const AttributesType = new GraphQLObjectType({
  name: 'Attributes',
  fields: () => ({
    synopsis: {
      type: GraphQLString
    },
    canonicalTitle: {
      type: GraphQLString
    },
    startDate: {
      type: GraphQLString
    },
    endDate: {
      type: GraphQLString
    },
    ageRating: {
      type: GraphQLString
    },
    posterImage: {
      type: PosterImageType
    },
    coverImage: {
      type: CoverImageType
    },
    showType: {
      type: GraphQLString
    }
  })
})

// Anime Type
const AnimeType = new GraphQLObjectType({
  name: 'Anime',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    attributes: {
      type: AttributesType
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    animes: {
      type: new GraphQLList(AnimeType),
      args: { offset: { type: GraphQLInt }},
      resolve(parentValue, args) {
        const limit = `?page[limit]=20`;
        const offset = `&page[offset]=${args.offset}`;
        const search = `&filter[text]=`;
        const url = `${baseUrl}${limit}${offset}`;
        return axios.get(url)
          .then(res => res.data.data)
          .catch(err => console.log(err));
      }
    },
    anime: {
      type: AnimeType,
      args: { id: { type: GraphQLID }},
      resolve(parent, args) {
        const id = `?filter[id]=${args.id}`;
        const url = `${baseUrl}${id}`;
        return axios
          .get(url)
          .then(res => res.data.data[0])
          .catch(err => console.log(err));
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
