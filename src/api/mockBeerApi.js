import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const beers = [
  {
    id: '1',
    name: 'IPA',
    brewery: 'Avery',
    price: '$6.99'
  },
  {
    id: '2',
    name: 'Death by coconut',
    brewery: 'Oscar Blues',
    price: '$7.99'
  },
  {
    id: '3',
    name: 'Milk stout',
    brewery: 'Lefthand',
    price: '$8.99'
  },
  {
    id: '4',
    name: 'Bitter Shandy',
    brewery: 'Home made',
    price: '$0.99'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (beer) => {
  return beer.name.toLowerCase() + '-' + beer.brewery.toLowerCase();
};

class BeerApi {
  static getAllBeers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], beers));
      }, delay);
    });
  }

  static saveAuthor(beer) {
	beer = Object.assign({}, beer); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minBeerNameLength = 3;
        if (beer.name.length < minBeerNameLength) {
          reject(`First Name must be at least ${minBeerNameLength} characters.`);
        }

        if (beer.id) {
          const existingBeerIndex = beers.findIndex(a => a.id == beer.id);
          beers.splice(existingBeerIndex, 1, beer);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new authors in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          beer.id = generateId(beer);
          beers.push(beer);
        }

        resolve(beer);
      }, delay);
    });
  }

  static deleteAuthor(beerId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfBeerToDelete = beers.findIndex(beer => {
          beer.id == beerId;
        });
        beers.splice(indexOfBeerToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default BeerApi;
