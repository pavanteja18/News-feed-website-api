import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
const apiKey = "30419ddf5f754ba4b9352af40d427279";
var country = "in";

app.use(bodyParser.urlencoded({extended: false}));

app.get("/", async (req, res) => {
    try {
        country = country;
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}&category=general`);
      const result = response.data.articles;

      console.log(result);
      res.render("index.ejs", { data: result, country: country });
    } 
    catch (error) {
      console.error("Failed to make request:", error.message);
      res.render("index.ejs", {
        error: error.message,
      });
    }
});

app.get("/world", async (req, res) => {
    try {
        country = country;
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&sortBy=popularity&language=en`);
      const result = response.data.articles;

      console.log(result);
      res.render("index.ejs", { data: result, country: country });
    } 
    catch (error) {
      console.error("Failed to make request:", error.message);
      res.render("index.ejs", {
        error: error.message,
      });
    }
});

app.post('/', async (req, res) => {
    try {
        const response = req.body.country;
        country = response;
        if(country == 'world'){
            res.redirect('/world');
        }
        else{
            res.redirect('/');
        }
    } catch (error) {
        console.log("Failed to make request:", error.message);
    }
});

app.get("/technology", async (req, res) => {
    try {
      country = country;
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}&category=technology`);
      const result = response.data.articles;
      console.log(result);
      res.render("index.ejs", { data: result, country: country });
    } 
    catch (error) {
      console.error("Failed to make request:", error.message);
      res.render("index.ejs", {
        error: error.message,
      });
    }
});

app.get("/entertainment", async (req, res) => {
    try {
      country = country;
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}&category=entertainment`);
      const result = response.data.articles;
      console.log(result);
      res.render("index.ejs", { data: result, country: country });
    } 
    catch (error) {
      console.error("Failed to make request:", error.message);
      res.render("index.ejs", {
        error: error.message,
      });
    }
});

app.get("/health", async (req, res) => {
    try {
      country = country;
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}&category=health`);
      const result = response.data.articles;
      console.log(result);
      res.render("index.ejs", { data: result, country: country });
    } 
    catch (error) {
      console.error("Failed to make request:", error.message);
      res.render("index.ejs", {
        error: error.message,
      });
    }
});

app.get("/business", async (req, res) => {
    try {
      country = country;
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}&category=business`);
      const result = response.data.articles;
      console.log(result);
      res.render("index.ejs", { data: result, country: country });
    } 
    catch (error) {
      console.error("Failed to make request:", error.message);
      res.render("index.ejs", {
        error: error.message,
      });
    }
});

app.get("/science", async (req, res) => {
    try {
      country = country;
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}&category=science`);
      const result = response.data.articles;
      console.log(result);
      res.render("index.ejs", { data: result, country: country });
    } 
    catch (error) {
      console.error("Failed to make request:", error.message);
      res.render("index.ejs", {
        error: error.message,
      });
    }
});

app.get("/sports", async (req, res) => {
    try {
      country = country;
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}&category=sports`);
      const result = response.data.articles;
      console.log(result);
      res.render("index.ejs", { data: result, country: country });
    } 
    catch (error) {
      console.error("Failed to make request:", error.message);
      res.render("index.ejs", {
        error: error.message,
      });
    }
});

app.listen(port, (req, res) => {
    console.log('listening on port ' + port);
});