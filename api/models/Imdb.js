/**
 * Imdb.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title: {
      type: 'string'
    },
    _year_data: {
      type: 'string'
    },
    rated: {
      type: 'string'
    },
    released: {
      type: 'string'
    },
    runtime: {
      type: 'string'
    },
    genres: {
      type: 'string'
    },
    director: {
      type: 'string'
    },
    writer: {
      type: 'string'
    },
    actors: {
      type: 'string'
    },
    plot: {
      type: 'string'
    },
    languages: {
      type: 'string'
    },
    country: {
      type: 'string'
    },
    awards: {
      type: 'string'
    },
    poster: {
      type: 'string'
    },
    metascore: {
      type: 'string'
    },
    rating: {
      type: 'string'
    },
    votes: {
      type: 'string'
    },
    imdbid: {
      type: 'string',
      primaryKey:true
    },
    type: {
      type: 'string'
    },
    response: {
      type: 'string'
    },
    series: {
      type: 'string'
    },
    imdburl: {
      type: 'string'
    }
  }
};

