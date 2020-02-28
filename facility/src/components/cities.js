import { City } from './city.js';

// here's how i want my cities
// array of objects containing city and key
// [ {city: {city}, {key: autoincrement } }]


class Cities {

    constructor () {
        this.counter = 0;
        this.cities = [];
    }

    // aggregate methods

    addCity (newCity) {
        this.counter = this.counter + 1;
        this.cities.push ( {"city": newCity, "counter": this.counter}   )
        return this.counter
    }

    deleteCity (counter) {
        // arr.findIndex(callback(element[, index[, array]])[, thisArg])
        const myTestingFunction = (element) => element.counter === counter;
        const myIndex = this.cities.findIndex (myTestingFunction);
        if (myIndex !== -1) {
            this.cities.splice(myIndex,1)
        }
    }

    getCity (counter) {

        const myTestingFunction = (element) => element.counter === counter;

        return this.cities.find(myTestingFunction).city;

    }

    getMostNorthern () {

    }

    getMostSouthern () {

    }

    howManyCities () {
        return this.cities.length;
    }

    // element level methods

    getName (counter) {
        return this.getCity(counter).getName();
    }

    getPopulation (counter) {
        return this.getCity(counter).getPopulation();
    }

    getLongitude (counter) {
        return this.getCity(counter).getLongitude();
    }

    getLatitude (counter) {
        return this.getCity(counter).getLatitude();
    }

    whichHemisphere (counter) {
        return this.getCity(counter).whichHemisphere();        
    }

    moveIn (counter, howMany) {
        return this.getCity(counter).moveIn(howMany);        
    }

    moveOut (counter, howMany) {
        return this.getCity(counter).moveOut(howMany);        
    }

    howBig (counter) {
        return this.getCity(counter).howBig();        
    }

}

export { Cities }