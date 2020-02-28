class City {
    constructor (name, population, longitude, latitude) {
        
        this.name = name;

        // this.population = (population > 0) ? population : 0;
        if (population > 0) {
            this.population = population;
        } else {
            this.population = 0;
        }

        if (longitude < -180) {
            this.longitude = -180
        } else if (longitude > 180) {
            this.longitude = 180
        } else {
            this.longitude = longitude;
        }

        if (latitude < -90) {
            this.latitude = -90
        } else if (latitude > 90) {
            this.latitude = 90
        } else {
            this.latitude = latitude;
        }

        return 0;
    }

    getName() {
        return this.name;
    }

    getPopulation() {
        return this.population;
    }

    getLongitude() {
        return this.longitude;
    }

    getLatitude() {
        return this.latitude;
    }
    
    whichHemisphere () {
        let result = "Equator"

        if (this.latitude > 0) {
            result = "Northern Hemisphere"
        } else if (this.latitude < 0) {
            result = "Southern Hemisphere"
        }
        return result;
    }

    moveIn (howMany) {

        if (howMany > 0) {
            this.population = this.population + howMany
        }

    }

    moveOut (howMany) {

        if (howMany > 0 && howMany <= this.population) {
            this.population = this.population - howMany
        }

    }

    // City – a population > 100,000
    // Large town – 20,001 to 100,000
    // Town – 1,001 to 20,000
    // Village – 101 to 1000
    // Hamlet – population 0 - 100

    howBig () {

        let result;

        if (this.population <= 100) {
            result = "Hamlet";
        } else if (this.population <= 1000) {
            result = "Village";
        } else if (this.population <= 20000) {
            result = "Town";
        } else if (this.population <= 100000) {
            result = "Large town";
        } else {
            result = "City";
        }

        return result;
    }

}

export { City };