const express = require("express")
const movies = require("./movies")

const app = express()
const PORT = 3000

// GET is a read - (giving you data)
// app.get("url endpoint", callback(req, res))
app.get("/", (req, res) => {
    res.status(200).json({ data: movies})
})

app.get("/action", (req, res) => {
    const actionFilms = movies.filter((el) => {
        return el.Genre.includes("Action")
    })
    console.log(actionFilms)
    res.status(200).json({ data: actionFilms })
})


// dynamic, :<req.params:name>
app.get("/genre/:genreName", (req, res) => {
    //http://localhost:3000/genre/action
    console.log(req.params) // { genreName: 'action' }
    console.log(req.params.genreName); // action
    
    const moviesByGenre = movies.filter(el => {
        return el.Genre.toLowerCase().includes(req.params.genreName)
    })

    console.log(moviesByGenre)
    res.status(200).json({ data: moviesByGenre })
})


// make a GET route that finds all films after the year 2010
// make a GET route that finds one film based on Title

app.get("/favorites", (req, res) => {
    res.status(200).send("Favorites")
})

// Create = POST Request
// Update = PUT Request/ Patch
// Delete = DELETE request

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
})