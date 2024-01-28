
# Movie Rental App

## Overview

The Movie Rental App is a simple JavaScript application that simulates a movie rental service. It consists of classes for `Movie`, `Customer`, and `MovieStore`, allowing customers to rent movies from a movie store.

## Classes

### Movie

The `Movie` class represents a movie available in the movie store.

- **Properties:**
  - `title`: The title of the movie.
  - `genre`: The genre of the movie.
  - `availableCopies`: The number of available copies of the movie.

- **Methods:**
  - `rentMovie()`: Rent a copy of the movie.
  - `returnMovie()`: Return a rented copy of the movie.

### Customer

The `Customer` class represents a customer who can rent movies from the movie store.

- **Properties:**
  - `name`: The name of the customer.
  - `rentedMovies`: An array to keep track of rented movies by the customer.

- **Methods:**
  - `rentMovie(movie)`: Rent a movie from the movie store.
  - `returnMovie(movie)`: Return a rented movie to the movie store.

### MovieStore

The `MovieStore` class represents the movie store where customers can rent movies.

- **Properties:**
  - `movies`: An array to store available movies in the store.

- **Methods:**
  - `addMovie(movie)`: Add a new movie to the store.
  - `rentMovieToCustomer(movie, customer)`: Rent a movie to a customer.

## Example Usage

```javascript
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
```

