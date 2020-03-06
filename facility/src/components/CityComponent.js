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
        this.setState ({message: "Cities loaded ok"});
    }

    fetchAll = async () => {
        const url = 'http://localhost:5000/api/all'
        const responseData = await this.fetchHandler(url);
        this.state.cities.flush()
        for (let city of responseData['Cities']){
            this.state.cities.addCity(
                city['Name'],
                city['Population'],
                city['Longitude'],
                city['Latitude'],
                city['Counter']
            );    
        }
    }

    fetchDelete = async (counter) => {
        const url = 'http://localhost:5000/api/delete/' + counter
        const responseData = await this.fetchHandler(url);
        console.log(responseData);
    }

    fetchAddCity = async (name, population, longitude, latitude) => {
        const url = 'http://localhost:5000/api/add/' + name + '/' + population + '/' + longitude + '/' + latitude
        const responseData = await this.fetchHandler(url);
        console.log(responseData);
    }

    fetchMoveOut = async (counter, how_many) => {
        const url = 'http://localhost:5000/api/moveout/' + counter + '/' + how_many
        const responseData = await this.fetchHandler(url);
        console.log(responseData);
    }

    fetchMoveIn = async (counter, how_many) => {
        const url = 'http://localhost:5000/api/movein/' + counter + '/' + how_many
        const responseData = await this.fetchHandler(url);
        console.log(responseData);
    }


    fetchHandler = async (url) => {
        const response = await fetch(url)
        const responseData = await response.json()
        return responseData
    }

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

        const cityName = this.state.cities.getName(counter);
        if (howMany > 0) {
            if (Math.round(howMany) === howMany) {
                await this.fetchMoveIn(counter, howMany);
                await this.fetchAll();
                myMessage = howMany + " citizens emerged in " + cityName + "."        
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

        const cityName = this.state.cities.getName(counter);
        if (howMany > 0) {
            if (Math.round(howMany) === howMany) {
                if (howMany <= this.state.cities.getPopulation(counter)) {
                    await this.fetchMoveOut(counter, howMany);
                    await this.fetchAll()
                    myMessage = howMany + " citizens vanished from " + cityName + "."    
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
        const myMessage = cityName + " has been pandemized.";
        await this.fetchDelete(counter)
        await this.fetchAll()
        this.setState ({message: myMessage});
    }


    render () {

        return <div>
                    <div className="controller">
                        <CityController
                            addCityHandler = {this.addCityHandler}
                        />
                        
                        <CityInfoDisplay
                            totalPopulation = {this.state.cities.getTotalPopulation()}
                            mostNorthern = {this.state.cities.getMostNorthern() && this.state.cities.getName(this.state.cities.getMostNorthern())}
                            mostSouthern = {this.state.cities.getMostSouthern() && this.state.cities.getName(this.state.cities.getMostSouthern())}
                            message = {this.state.message}
                            fetchHandler = {this.fetchHandler}
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