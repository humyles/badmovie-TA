const movieModel = require('../models/movieModel.js');
const apiHelpers = require('../helpers/apiHelpers.js');
const request = require('request');

//Return requests to the client
module.exports = {
  getSearch: (req, res) => {
    request(apiHelpers.moviesGet, (err, response, body) => {
      if (err) {res.sendstatus(500);}
      res.send(body);
    });
    // get the search genre     

    // https://www.themoviedb.org/account/signup
    // get your API KEY

    // use this endpoint to search for movies by genres, you will need an API key

    // https://api.themoviedb.org/3/discover/movie

    // and sort them by horrible votes using the search parameters in the API

  },
  getGenres: (req, res) => {
    request(apiHelpers.genreGet, (err, response, body) => {
      if (err) {res.sendStatus(500);}
      res.send(body);
    });
    // make an axios request to get the list of official genres
    
    // use this endpoint, which will also require your API key: https://api.themoviedb.org/3/genre/movie/list

    // send back

  },
  saveMovie: (req, res) => {

  },
  deleteMovie: (req, res) => {

  }
}