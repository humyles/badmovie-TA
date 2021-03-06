const request = require('request');
const axios = require('axios');
const { API_KEY } = require('../../config.js');

// write out logic/functions required to query TheMovieDB.org

// FOR REFERENCE:
// https://www.themoviedb.org/account/signup
// https://developers.themoviedb.org/3/discover/movie-discover
// Get your API Key and save it in your config file

// Don't forget to export your functions and require them within your server file

exports.genreGet = {
    url: 'https://api.themoviedb.org/3/genre/movie/list?api_key=51dd9e631d329a315fb8c324e892ae50&language=en-US',
    method: 'GET',
    api: API_KEY
}

exports.moviesGet = {
    url: 'https://api.themoviedb.org/3/discover/movie?api_key=51dd9e631d329a315fb8c324e892ae50&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1',
    method: 'GET',
    api: API_KEY,
}

