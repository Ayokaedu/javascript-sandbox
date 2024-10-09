const nums = [7, 8, 2, 4];
// Complex data structure
// Object
const movies = [
  { id: 1, title: "Die Hard", director: "Bruce Willis", rating: 3.4 },
  { id: 2, title: "Mission Impossible", director: "Tom Cruise", rating: 4.5 },
  { id: 3, title: "Little miss Forest", director: "John Doe", rating: 4.1 },
  { id: 4, title: "Mission Impossible 2", director: "Tom Cruise", rating: 4.4 },
];

movies.map((movie) => {
  console.log(movie.title.toUpperCase(), movie.rating);
});

// 4.0 and above
const topRatedMovies = movies.filter((movie) => {
  return movie.rating >= 4;
});
console.log(topRatedMovies);

// miss
const searchedMovies = movies.filter((movie) => movie.title.includes("miss"));
console.log(searchedMovies);
// Miss -> miss
const searchMovies = (searchTerm) => {
  const converted = searchTerm.trim().toLowerCase();
  const moviesSearched = movies.filter((movie) =>
    movie.title.toLowerCase().includes(converted)
  );
  return moviesSearched;
};

console.log(searchMovies("die"));

const tomMovie = movies.filter((movie) => {
  return movie.director.toLowerCase() === "Tom Cruise".toLowerCase();
});

console.log(tomMovie);

const movieId = movies.find((movie) => movie.id === 3);

console.log(movieId);

const moviesLessRated = movies.filter((movie) => movie.rating < 4);
console.log(moviesLessRated);

const events = [
  {
    id: 1,
    title: "Movie In the Park",
    category: "Party",
    date: "Aug 6th, 2024",
    price: 0,
    location: "Lagos",
  },
  {
    id: 2,
    title: "Burna Live In Concert",
    category: "Party",
    date: "Dec 23rd, 2024",
    price: 25000,
    location: "Lagos",
  },
  {
    id: 3,
    title: "Read With Kuku",
    category: "Education",
    date: "Sept 6th, 2024",
    price: 5000,
    location: "Online",
  },
  {
    id: 4,
    title: "Japa on a Budget",
    category: "Education",
    date: "Nov 6th, 2024",
    price: 10000,
    location: "Abuja",
  },
  {
    id: 5,
    title: "Mainland Block Party",
    category: "Party",
    date: "Dec 6th, 2024",
    price: 12000,
    location: "Lagos",
  },
];

console.log(events.length);

const eventsInLagos = events.filter((event) =>
  event.location.includes("Lagos")
);

console.log(eventsInLagos);

const eventsLesserPrice = events.filter((event) => event.price <= 15000);
console.log(eventsLesserPrice);

const parties = events.filter((event) => event.category === "Party");
console.log(parties);

const alphabetically = events.sort((a, b) => a.title.localeCompare(b.title));
console.log(alphabetically);

const numOfEvents = events.length;
const randomEvents = Math.floor(Math.random() * numOfEvents);
console.log(randomEvents);
console.log(events[randomEvents]);

