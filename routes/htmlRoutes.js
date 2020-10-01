const db = require("../models");
const axios = require("axios");
const cheerio = require("cheerio");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index");
  });
};