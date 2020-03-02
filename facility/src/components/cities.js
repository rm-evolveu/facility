import { City } from './city.js';

// here's how i want my cities
// array of objects containing city and key
// [ {city: {city}, {counter: autoincrement } }]


class Cities {

    constructor () {
        this.counter = 0;
        this.cities = [];
    }

    // aggregate methods

    addCity (cityName, cityPopulation, cityLongitude, cityLatitude) {
        const newCity = new City(cityName, cityPopulation, cityLongitude, cityLatitude)
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

    getCityList () {
        return this.cities.map ( value => value.counter );
    }

    getMostNorthern () {
        const howManyCities = this.howManyCities();
        let mostNorthernCounter = null;

        if ( howManyCities > 0 ) {
            // i have at least 1 city and i just take the first one
            // for most northern for now
            let mostNorthernLatitude = this.cities[0].city.getLatitude();
            mostNorthernCounter = this.cities[0].counter;

            // and now i'm starting to look at the other
            for ( let i = 1; i < howManyCities; i++ ) {
                const currentCityLatitude = this.cities[i].city.getLatitude()
                if ( currentCityLatitude > mostNorthernLatitude ) {
                    mostNorthernLatitude = currentCityLatitude;
                    mostNorthernCounter = this.cities[i].counter;
                }
            } 
        }

        return mostNorthernCounter;
    }

    getMostSouthern () {
        const howManyCities = this.howManyCities();
        let mostSouthernCounter = null;

        if ( howManyCities > 0 ) {
            // i have at least 1 city and i just take the first one
            // for most northern for now
            let mostSouthernLatitude = this.cities[0].city.getLatitude();
            mostSouthernCounter = this.cities[0].counter;

            // and now i'm starting to look at the other
            for ( let i = 1; i < howManyCities; i++ ) {
                const currentCityLatitude = this.cities[i].city.getLatitude()
                if ( currentCityLatitude < mostSouthernLatitude ) {
                    mostSouthernLatitude = currentCityLatitude;
                    mostSouthernCounter = this.cities[i].counter;
                }
            } 
        }

        return mostSouthernCounter;
    }

    getTotalPopulation () {

        return this.cities.reduce (
            (acc, value) => acc + value.city.getPopulation() , 0
        )

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