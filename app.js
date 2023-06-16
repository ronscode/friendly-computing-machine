const express = require('express');
let ejs = require('ejs');
const pokemonArray = require('./pokemon');

const app = express();
const port = 3000;

// Set EJS at templating engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.urlencoded({ extended: true })); 

// Home Route
app.get('/', (req, res) => {
  const data = {title: "Home", message: "Welcome to EJS"};
  res.render('index', data);
});

// Pokemon Route
app.get('/pokemon', (req, res) => {
  res.render('pokemon', {title: "Pokemon", pokemonArray});
});

// GET single Pokemon

app.get('/pokemon/:id', (req, res) => {
  const id = req.params.id;
  const pokemon = pokemonArray[id];
  console.log(pokemon);
  res.render('singlePokemon', {pokemon});
});

// GET random Pokemon

app.get('/random', (req, res) => {
  // generate random number between 0 - 9
  const rn = Math.floor(Math.random() * 10);
  const pokemon = pokemonArray[rn];
  console.log(pokemon)
  res.render("singlePokemon", {pokemon})
});
// create route /pokemon/random
// get a random Pokemon 0-10
// render singlePokemon, pass in the matching Pokemon
// from the random index















// Create a route that...
// GET a single Pokemon by ID

// Use the index of the array as the id
// Hint, you'll use req.params
// Create a template and pass in the Pokemon at that index

// Create GET Route
app.get('/create', (req, res) => {
  res.render('create', {title: "Create A Pokemon"});
})

// Create POST Route

app.post('/create', (req, res) => {
  // Code goes here
  console.log("A new Pokemon was created!");
  console.log(req.body);
  res.redirect('/pokemon');
});





// ✔️ Make a route for /create
// Add a form to create a Pokemon
// Console log the values on submit using a POST route

app.listen(port, () => {
  console.log(`Example app listening on port ${port}, http://localhost:${port}`);
});
