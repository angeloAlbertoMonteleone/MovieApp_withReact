"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var API_KEY = 'ebe0a7b19063d864de232de72766c4ee';
var requests = {
  fetchPopular: "/movie/popular?api_key=".concat(API_KEY, "&language=en-US"),
  fetchComedies: "/discover/movie?api_key=".concat(API_KEY, "&with_genres=28"),
  fetchUpcoming: "/movie/upcoming?api_key=".concat(API_KEY, "&language=en-US"),
  fetchFamilies: "/discover/movie?api_key=".concat(API_KEY, "&with_genres=10751"),
  fetchTopRated: "/movie/top_rated?api_key=".concat(API_KEY, "&language=en-US"),
  fetchOriginals: "/discover/tv?api_key=".concat(API_KEY, "&with_networks=213"),
  fetchDramas: "/discover/movie?api_key=".concat(API_KEY, "&with_genres=18"),
  fetchThrillers: "/discover/movie?api_key=".concat(API_KEY, "&with_genres=53"),
  fetchHorrors: "/discover/movie?api_key=".concat(API_KEY, "&with_genres=27"),
  fetchGenres: "/genre/movie/list?api_key=".concat(API_KEY, "&language=en-US"),
  fetchSearch: "/search/movie?api_key=".concat(API_KEY, "&query=")
};
var _default = requests;
exports["default"] = _default;