const dataMovieSuggestion = [
  {
    Title: "It Ends with Us",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYzM2NGMzNGQtZjNhMi00MTVkLTg2ZGQtN2M4OTllYzU1Y2Y0XkEyXkFqcGc@._V1_SX300.jpg",
    imdbID: "tt10655524",
  },
  {
    Title: "Spider-Man: Across the Spider-Verse",
    imdbID: "tt9362722",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg",
  },
  {
    Title: "Bad Boys: Ride or Die",
    imdbID: "tt4919268",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BY2U5YmQ3YjgtM2I2OC00YmM5LTkyM2MtN2I5Zjg2MDE0ODkwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
  },
  {
    Title: "Longlegs",
    imdbID: "tt23468450",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMmVkZWY2ODEtYTMyYy00MDg2LWFkMGUtMjYwOTBhOGViODQzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
  },
  {
    Title: "Twisters",
    imdbID: "tt12584954",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZTQ0YjZhNzMtMzMwYi00YTQwLTlhYTgtNDBlZjRhYjJmMzJmXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    Title: "Spider-Man: No Way Home",
    imdbID: "tt10872600",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg",
  },
  {
    Title: "Deadpool & Wolverine",
    imdbID: "tt6263850",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzRiMjg0MzUtNTQ1Mi00Y2Q5LWEwM2MtMzUwZDU5NmVjN2NkXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    Title: "Venom: Let There Be Carnage",
    imdbID: "tt7097896",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDEwNDE5ZDUtMjQ0ZC00OTA0LTkyOTQtZGE0OTU4Njc0MjM5XkEyXkFqcGdeQXVyMzEyMDQzNzY@._V1_SX300.jpg",
  },
  {
    Title: "Inside Out 2",
    imdbID: "tt22022452",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYTc1MDQ3NjAtOWEzMi00YzE1LWI2OWUtNjQ0OWJkMzI3MDhmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
  },
  {
    Title: "Despicable Me 4",
    imdbID: "tt7510222",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTk4MjFhZTMtOWIxOS00YzE2LThkZGEtMzg0MDAyMmFiZmU1XkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_SX300.jpg",
  },
  {
    Title: "Gladiator",
    imdbID: "tt0172495",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWQ4YmNjYjEtOWE1Zi00Y2U4LWI4NTAtMTU0MjkxNWQ1ZmJiXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    Title: "Moana 2",
    imdbID: "tt13622970",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZDUxNThhYTUtYjgxNy00MGQ4LTgzOTEtZjg1YTU5NTcwNThlXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    Title: "Terrifier 3",
    imdbID: "tt27911000",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzc2MWUyYzctY2E4Ny00ZTlmLThjNTMtMTViZGI5NjcyN2EzXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    Title: "The Lego Ninjago Movie",
    imdbID: "tt3014284",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNWQ3Zjk0ZGEtOTU4ZS00OWY1LTlkM2YtNTllZjBhNTk3NDAxXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    Title: "Joker: Folie à Deux",
    imdbID: "tt11315808",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNTRlNmU1NzEtODNkNC00ZGM3LWFmNzQtMjBlMWRiYTcyMGRhXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    Title: "The Lego Star Wars Holiday Special",
    imdbID: "tt12885438",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYzQ2NTRhZGItN2MxMC00N2UzLTk2YTMtYWI5NmU4OTVkNTc2XkEyXkFqcGc@._V1_SX300.jpg",
  },
];

export default dataMovieSuggestion;