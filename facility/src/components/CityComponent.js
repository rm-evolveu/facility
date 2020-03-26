import React from 'react';
import { CityCard } from './CityCard.js';
import { CityInfoDisplay } from './CityInfoDisplay.js';
import { CityController } from './CityController.js'
import { CitySettings } from './CitySettings.js'
import { Cities } from "./cities.js";
import './Cities.css';

// importing locales
import messages_en_CA from '../strings/messages_en_CA.js';
import messages_es_LA from '../strings/messages_es_LA.js';
import messages_hi_IN from '../strings/messages_hi_IN.js';
import messages_it_IT from '../strings/messages_it_IT.js';
import messages_so_SO from '../strings/messages_so_SO.js';
import messages_zh_CN from '../strings/messages_zh_CN.js';


const hostName = 'ec2-54-91-22-211.compute-1.amazonaws.com'
// const hostName = 'localhost:5000'



class CityComponent extends React.Component {


    constructor(props) {

        super(props) ;

        // array of objects containing city and key
        // [ {city: {city}, {counter: autoincrement } }]

        this.defaultLanguage = "zh_CN"

        this.state = {
            message: "Trying to load cities.",
            cities: new Cities(),
            messages: {
                "en_CA": messages_en_CA,
                "es_LA": messages_es_LA,
                "hi_IN": messages_hi_IN,
                "it_IT": messages_it_IT,
                "so_SO": messages_so_SO,
                "zh_CN": messages_zh_CN,
            },
        }

        let storedLanguage = localStorage.getItem('language')

        if (storedLanguage !== null) {
            this.state.language = storedLanguage
        } else {
            this.state.language = this.defaultLanguage
            localStorage.setItem('language', this.defaultLanguage)
        }

        this.messageBuilder = () => "Trying to load cities.";
    }

    componentDidMount () {
        this.initialize()
    }

    initialize = async () => {
        const status = await this.fetchAll()
        if (status === 0) {
            this.messageBuilder = () => this.state.messages[this.state.language].CityComponent.fetchAll.citiesLoadedOK
        } else {
            this.messageBuilder = () => this.state.messages[this.state.language].CityComponent.fetchAll.couldNotLoadCities
        }
        this.update()
    }

    update = () => {
        const newMessage = this.messageBuilder()
        this.setState({message: newMessage})
    }

    fetchAll = async () => {
        const url = 'http://' + hostName + '/api/ddb/all'
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
        }
        return responseData.Status
    }

    fetchDelete = async (counter) => {
        const url = 'http://' + hostName + '/api/ddb/delete/' + counter
        const responseData = await this.fetchHandler(url);
        return responseData.Status
    }

    fetchAddCity = async (name, population, longitude, latitude) => {
        const url = 'http://' + hostName + '/api/ddb/add/' + name + '/' + population + '/' + longitude + '/' + latitude
        const responseData = await this.fetchHandler(url);
        return responseData.Status
    }

    fetchMoveOut = async (counter, how_many) => {
        const url = 'http://' + hostName + '/api/ddb/moveout/' + counter + '/' + how_many
        const responseData = await this.fetchHandler(url);
        return responseData.Status
    }

    fetchMoveIn = async (counter, how_many) => {
        const url = 'http://' + hostName + '/api/ddb/movein/' + counter + '/' + how_many
        const responseData = await this.fetchHandler(url);
        return responseData.Status
    }

    fetchHandler = async (url) => {
        let responseData
        try {
            const response = await fetch(url)
            responseData = await response.json()
        } catch {
            responseData = { 'Status' : -1 }
        }
        return responseData
    }

    //  this is just a testing area

    randomCity = async () => {
        const url = 'http://' + hostName + '/services/randomcity'
        const responseData = await this.fetchHandler(url);
        return responseData['Name'];
    }    

    // 

    addCityHandler = async (cityName, cityPopulation, cityLongitude, cityLatitude) => {
        if (cityName.length > 0) {
            if (cityPopulation > 0 && Math.round(cityPopulation) === cityPopulation) {
                if (cityLongitude <= 180 && cityLongitude >= -180 && cityLatitude <= 90 && cityLatitude >= -90) {
                    await this.fetchAddCity(cityName, cityPopulation, cityLongitude, cityLatitude);
                    await this.fetchAll()
                    this.messageBuilder = () => this.parser( this.state.messages[this.state.language].CityComponent.addCityHandler.cityHasBeenCreated, cityName )
                } else {
                    this.messageBuilder = () => this.state.messages[this.state.language].CityComponent.addCityHandler.weNeedValidCoordinates
                }
            } else {
                this.messageBuilder = () => this.state.messages[this.state.language].CityComponent.addCityHandler.weNeedValidPopulation
            }
        } else {            
            this.messageBuilder = () => this.state.messages[this.state.language].CityComponent.addCityHandler.weNeedCityName
        }
        this.update()
    }

    moveInHandler = async (counter, howMany) => {
        let result;
        const cityName = this.state.cities.getName(counter);
        if (howMany > 0) {
            if (Math.round(howMany) === howMany) {
                this.messageBuilder = () => this.parser( this.state.messages[this.state.language].CityComponent.moveInHandler.tryingToEmerge, howMany, cityName)
                this.update()
                result = await this.fetchMoveIn(counter, howMany);
                if (result === 0) {
                    this.messageBuilder = () => this.parser( this.state.messages[this.state.language].CityComponent.moveInHandler.emerged, howMany, cityName)
                } else {
                    this.messageBuilder = () => this.parser( this.state.messages[this.state.language].CityComponent.moveInHandler.couldNotEmerge, howMany, cityName)
                }
                await this.fetchAll()                    
            } else {
                // Thank you Dale!
                this.messageBuilder = () => this.state.messages[this.state.language].CityComponent.moveInHandler.noFractions
            }
        } else {
            this.messageBuilder = () => this.state.messages[this.state.language].CityComponent.moveInHandler.noNegatives
        }
        this.update()
    }

    moveOutHandler = async (counter, howMany) => {
        let result;
        const cityName = this.state.cities.getName(counter);
        if (howMany > 0) {
            if (Math.round(howMany) === howMany) {
                if (howMany <= this.state.cities.getPopulation(counter)) {
                    this.messageBuilder = () => this.parser( this.state.messages[this.state.language].CityComponent.moveOutHandler.tryingToVanish, howMany, cityName)
                    this.update()
                    result = await this.fetchMoveOut(counter, howMany);
                    if (result === 0) {
                        this.messageBuilder = () => this.parser( this.state.messages[this.state.language].CityComponent.moveOutHandler.vanished, howMany, cityName)
                    } else {                        
                        this.messageBuilder = () => this.parser( this.state.messages[this.state.language].CityComponent.moveOutHandler.couldNotVanish, howMany, cityName)
                    }
                    await this.fetchAll()                        
                } else {
                    this.messageBuilder = () => this.state.messages[this.state.language].CityComponent.moveOutHandler.noGhostCities
                }
            } else {
                // Thank you Dale!                
                this.messageBuilder = () => this.state.messages[this.state.language].CityComponent.moveOutHandler.noFractions
            }
        } else {            
            this.messageBuilder = () => this.state.messages[this.state.language].CityComponent.moveOutHandler.noNegatives
        }
        this.update()
    }

    pandemizeHandler = async (counter) => {
        const cityName = this.state.cities.getName(counter);
        this.messageBuilder = () => this.parser( this.state.messages[this.state.language].CityComponent.pandemizeHandler.tryingToPandemize, cityName)
        this.update()
        const result = await this.fetchDelete(counter)
        if (result === 0) {
            this.messageBuilder = () => this.parser( this.state.messages[this.state.language].CityComponent.pandemizeHandler.pandemized, cityName)
        } else {
            this.messageBuilder = () => this.parser( this.state.messages[this.state.language].CityComponent.pandemizeHandler.couldNotPandemize, cityName)
        }
        await this.fetchAll()
        this.update()
        // this.update(myMessage)
    }

    languageHandler = (event) => {
        localStorage.setItem('language', event.currentTarget.value)
        this.setState ({language: event.currentTarget.value})
    }

    // helper functions

    parser = (...args) => {
        const str = args[0];
        const params = args.filter((arg, index) => index !== 0);
        if (!str) return "";
        return str.replace(/%s[0-9]+/g, matchedStr => {
          const variableIndex = matchedStr.replace("%s", "") - 1;
          return params[variableIndex];
        });
    }


    render () {

        return <div>
                    <div className="controller">
                        <CityController
                            addCityHandler = {this.addCityHandler}
                            randomCity = {this.randomCity}
                            messages={this.state.messages[this.state.language]}
                        />
                        
                        <CityInfoDisplay
                            totalPopulation = {this.state.cities.getTotalPopulation()}
                            mostNorthern = {this.state.cities.getMostNorthern() && this.state.cities.getName(this.state.cities.getMostNorthern())}
                            mostSouthern = {this.state.cities.getMostSouthern() && this.state.cities.getName(this.state.cities.getMostSouthern())}
                            // message = {this.state.message}
                            message = {this.messageBuilder()}
                            fetchHandler = {this.randomCity}
                            messages={this.state.messages[this.state.language]}
                        />

                        <CitySettings
                            languageHandler = {this.languageHandler}
                            messages = {this.state.messages}
                            currentLanguage = {this.state.language}
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
                                            messages={this.state.messages[this.state.language]}
                                        />
                        )}
                    </div>
                </div>

    }

}

export { CityComponent } ;