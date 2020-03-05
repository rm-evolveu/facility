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
            message: "Do something and you'll get to know here.",
            cities: new Cities()
        }
    }

    componentDidMount () {
        this.loadCities()
    }

    loadCities = async () => {
        const responseData = await this.fetchHandler('http://localhost:5000/api/all');
        for (let city of responseData['Cities']){
            this.state.cities.addCity(
                city['Name'],
                city['Population'],
                city['Longitude'],
                city['Latitude']
            );    
        }
        this.setState ({message: "O-la-la"});
    }

    fetchHandler = async (url) => {
        const response = await fetch(url)
        const responseData = await response.json()
        return responseData
    }

    addCityHandler = (cityName, cityPopulation, cityLongitude, cityLatitude) => {

        let myMessage;

        if (cityName.length > 0) {
            if (cityPopulation > 0 && Math.round(cityPopulation) === cityPopulation) {
                if (cityLongitude <= 180 && cityLongitude >= -180 && cityLatitude <= 90 && cityLatitude >= -90) {
                    this.state.cities.addCity(cityName, cityPopulation, cityLongitude, cityLatitude);
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

    moveInHandler = (counter, howMany) => {
        let myMessage;

        const cityName = this.state.cities.getName(counter);
        if (howMany > 0) {
            if (Math.round(howMany) === howMany) {
                this.state.cities.moveIn(counter, howMany);
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

    moveOutHandler = (counter, howMany) => {
        let myMessage;

        const cityName = this.state.cities.getName(counter);
        if (howMany > 0) {
            if (Math.round(howMany) === howMany) {
                if (howMany <= this.state.cities.getPopulation(counter)) {
                    this.state.cities.moveOut(counter, howMany);
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

    pandemizeHandler = (counter) => {
        const cityName = this.state.cities.getName(counter);
        this.state.cities.deleteCity(counter);
        const myMessage = cityName + " has been pandemized.";
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