// Movie class represents a movie
class Movie {
    constructor(title, genre, availableCopies) {
      this.title = title;
      this.genre = genre;
      this.availableCopies = availableCopies;
    }
  
    rentMovie() {
      if (this.availableCopies > 0) {
        this.availableCopies--;
        console.log(`"${this.title}" rented successfully.`);
        return true;
      } else {
        console.log(`Sorry, "${this.title}" is out of stock.`);
        return false;
      }
    }
  
    returnMovie() {
      this.availableCopies++;
      console.log(`"${this.title}" returned.`);
    }
  }
  
  // Customer class represents a customer
  class Customer {
    constructor(name) {
      this.name = name;
      this.rentedMovies = [];
    }
  
    rentMovie(movie) {
      if (movie.rentMovie()) {
        this.rentedMovies.push(movie);
        console.log(`${this.name} rented "${movie.title}".`);
      } else {
        console.log(`${this.name} could not rent "${movie.title}".`);
      }
    }
  
    returnMovie(movie) {
      const index = this.rentedMovies.indexOf(movie);
      if (index !== -1) {
        movie.returnMovie();
        this.rentedMovies.splice(index, 1);
        console.log(`${this.name} returned "${movie.title}".`);
      } else {
        console.log(`${this.name} did not rent "${movie.title}".`);
      }
    }
  }
  
  // MovieStore class represents a movie store
  class MovieStore {
    constructor() {
      this.movies = [];
    }
  
    addMovie(movie) {
      this.movies.push(movie);
      console.log(`"${movie.title}" added to the movie store.`);
    }
  
    rentMovieToCustomer(movie, customer) {
      if (this.movies.includes(movie)) {
        customer.rentMovie(movie);
      } else {
        console.log(`"${movie.title}" is not available in the movie store.`);
      }
    }
  }
  
  // Example Usage:
  
  // Create movies
  const movie1 = new Movie('Inception', 'Sci-Fi', 5);
  const movie2 = new Movie('The Shawshank Redemption', 'Drama', 3);
  
  // Create a movie store
  const movieStore = new MovieStore();
  
  // Add movies to the store
  movieStore.addMovie(movie1);
  movieStore.addMovie(movie2);
  
  // Create customers
  const customer1 = new Customer('Ginger');
  const customer2 = new Customer('Amaka');
  
  // Rent movies to customers
  movieStore.rentMovieToCustomer(movie1, customer1);
  movieStore.rentMovieToCustomer(movie2, customer2);
  movieStore.rentMovieToCustomer(movie1, customer2); // Attempting to rent an out-of-stock movie
  
  // Return movies
  customer1.returnMovie(movie1);
  customer2.returnMovie(movie2);
  
  