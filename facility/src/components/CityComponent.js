import React from 'react';
import { CityCard } from './CityCard.js';
import { CityInfoDisplay } from './CityInfoDisplay.js';
import { CityController } from './CityController.js'
import { Cities } from "./cities.js";
import './Cities.css';



class CityComponent extends React.Component {


    constructor(props) {

        super(props) ;

        // array of objects containing city and key
        // [ {city: {city}, {counter: autoincrement } }]
        this.state = {
            message: "Trying to load cities.",
            cities: new Cities()
        }
    }

    componentDidMount () {
        this.initialize()
    }

    initialize = async () => {
        await this.fetchAll()
    }

    fetchAll = async () => {
        const url = 'http://localhost:5000/api/all'
        const responseData = await this.fetchHandler(url);
        this.state.cities.flush()
        if (responseData.Status === 0) {
            for (let city of responseData['Cities']) {
                this.state.cities.addCity(
                    city['Name'],
                    city['Population'],
                    city['Longitude'],
                    city['Latitude'],
                    city['Counter']
                );        
            }
            this.setState ({message: "Cities loaded ok"});
        } else {
            this.setState ({message: "Could not load cities" });
        }
    }

    fetchDelete = async (counter) => {
        const url = 'http://localhost:5000/api/delete/' + counter
        const responseData = await this.fetchHandler(url);
        return responseData.Status
    }

    fetchAddCity = async (name, population, longitude, latitude) => {
        const url = 'http://localhost:5000/api/add/' + name + '/' + population + '/' + longitude + '/' + latitude
        const responseData = await this.fetchHandler(url);
        return responseData.Status
    }

    fetchMoveOut = async (counter, how_many) => {
        const url = 'http://localhost:5000/api/moveout/' + counter + '/' + how_many
        const responseData = await this.fetchHandler(url);
        return responseData.Status
    }

    fetchMoveIn = async (counter, how_many) => {
        const url = 'http://localhost:5000/api/movein/' + counter + '/' + how_many
        const responseData = await this.fetchHandler(url);
        return responseData.Status
    }

    fetchHandler = async (url) => {
        let responseData
        try {
            const response = await fetch(url)
            responseData = await response.json()
            responseData.Status = 0    
        } catch {
            responseData = { 'Status' : -1 }
        }
        return responseData
    }

    //  this is just a testing area

    randomCity = async () => {
        const url = 'http://localhost:5000/services/randomcity'
        const responseData = await this.fetchHandler(url);
        return responseData['Name'];
    }    

    // 

    addCityHandler = async (cityName, cityPopulation, cityLongitude, cityLatitude) => {

        let myMessage;

        if (cityName.length > 0) {
            if (cityPopulation > 0 && Math.round(cityPopulation) === cityPopulation) {
                if (cityLongitude <= 180 && cityLongitude >= -180 && cityLatitude <= 90 && cityLatitude >= -90) {
                    await this.fetchAddCity(cityName, cityPopulation, cityLongitude, cityLatitude);
                    await this.fetchAll()
                    myMessage = cityName + " has been created."        
                } else {
                    myMessage = "We need valid coordinates."
                }
            } else {
                myMessage = "We want a non-negative, non-fractional population."
            }
        } else {
            myMessage = "We want our cities to have names."
        }

        this.setState ({message: myMessage});
    }

    moveInHandler = async (counter, howMany) => {
        let myMessage;
        let result;
        const cityName = this.state.cities.getName(counter);
        if (howMany > 0) {
            if (Math.round(howMany) === howMany) {
                this.setState ({message: "Trying to emerge " + howMany + " citizens in " + cityName + "..."})
                result = await this.fetchMoveIn(counter, howMany);
                if (result === 0) {
                    await this.fetchAll()
                    myMessage = howMany + " citizens emerged in " + cityName + "."        
                } else {
                    myMessage = "Could not emerge " + howMany + " citizens in " + cityName + "."
                }
            } else {
                // Thank you Dale!
                myMessage = "We don't deal with fractions of citizens."
            }
        } else {
            myMessage = "We can only emerge a positive number of citizens."
        }
        this.setState ({message: myMessage});
    }

    moveOutHandler = async (counter, howMany) => {
        let myMessage;
        let result;
        const cityName = this.state.cities.getName(counter);
        if (howMany > 0) {
            if (Math.round(howMany) === howMany) {
                if (howMany <= this.state.cities.getPopulation(counter)) {
                    this.setState ({message: "Trying to vanish " + howMany + " citizens from " + cityName + "..."})
                    result = await this.fetchMoveOut(counter, howMany);
                    if (result === 0) {
                        await this.fetchAll()
                        myMessage = howMany + " citizens vanished from " + cityName + "."    
                    } else {
                        myMessage = "Could not vanish " + howMany + " citizens from " + cityName + "."
                    }
                } else {
                    myMessage = "We don't fancy ghost cities."
                }
            } else {
                // Thank you Dale!
                myMessage = "We don't deal with fractions of citizens."
            }
        } else {
            myMessage = "We can only vanish a positive number of citizens."
        }
        this.setState ({message: myMessage});
    }

    pandemizeHandler = async (counter) => {
        const cityName = this.state.cities.getName(counter);
        this.setState ({message: "Trying to pandemize " + cityName + "..."})
        let myMessage
        const result = await this.fetchDelete(counter)
        if (result === 0) {
            myMessage = cityName + " has been pandemized.";
            await this.fetchAll()
        } else {
            myMessage = "Could not pandemize " + cityName + ".";
        }
        this.setState ({message: myMessage});
    }


    render () {

        return <div>
                    <div className="controller">
                        <CityController
                            addCityHandler = {this.addCityHandler}
                            randomCity = {this.randomCity}
                        />
                        
                        <CityInfoDisplay
                            totalPopulation = {this.state.cities.getTotalPopulation()}
                            mostNorthern = {this.state.cities.getMostNorthern() && this.state.cities.getName(this.state.cities.getMostNorthern())}
                            mostSouthern = {this.state.cities.getMostSouthern() && this.state.cities.getName(this.state.cities.getMostSouthern())}
                            message = {this.state.message}
                            fetchHandler = {this.randomCity}
                        />

                    </div>

                    <div className="cityCards">
                        {this.state.cities.getCityList().map(
                            (counter) => <CityCard
                                            cityName={this.state.cities.getName(counter)} 
                                            cityPopulation={this.state.cities.getPopulation(counter)}
                                            cityHemisphere={this.state.cities.whichHemisphere(counter)}
                                            cityHowBig={this.state.cities.howBig(counter)}
                                            moveInHandler={this.moveInHandler}
                                            moveOutHandler={this.moveOutHandler}
                                            pandemizeHandler={this.pandemizeHandler}
                                            counter={counter}
                                            key={counter}
                                        />
                        )}
                    </div>
                </div>

    }

}

export { CityComponent } ;