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
        this.cities = new Cities();
        this.cities.addCity("Mogadisho", 100, 5, 10);
    }

    addCityHandler = (cityName, cityPopulation, cityLongitude, cityLatitude) => {
        this.cities.addCity(cityName, cityPopulation, cityLongitude, cityLatitude);
        this.setState ({nonsense: null});
    }

    moveInHandler = (counter, howMany) => {
        this.cities.moveIn(counter, howMany);
        this.setState ({nonsense: null});
    }

    moveOutHandler = (counter, howMany) => {
        this.cities.moveOut(counter, howMany);
        this.setState ({nonsense: null});
    }

    pandemizeHandler = (counter) => {
        this.cities.deleteCity(counter);
        this.setState ({nonsense: null});
    }


    render () {

        return <div>
                    <div className="controller">
                        <CityController
                            addCityHandler = {this.addCityHandler}
                        />
                        
                        <CityInfoDisplay
                            totalPopulation = {this.cities.getTotalPopulation()}
                            mostNorthern = {this.cities.getMostNorthern() && this.cities.getName(this.cities.getMostNorthern())}
                            mostSouthern = {this.cities.getMostSouthern() && this.cities.getName(this.cities.getMostSouthern())}
                        />
                    </div>

                    <br/>

                    {this.cities.getCityList().map(
                        (counter) => <CityCard
                                        cityName={this.cities.getName(counter)} 
                                        cityPopulation={this.cities.getPopulation(counter)}
                                        cityHemisphere={this.cities.whichHemisphere(counter)}
                                        cityHowBig={this.cities.howBig(counter)}
                                        moveInHandler={this.moveInHandler}
                                        moveOutHandler={this.moveOutHandler}
                                        pandemizeHandler={this.pandemizeHandler}
                                        counter={counter}
                                        key={counter}
                                     />
                    )}


                </div>

    }

}

export { CityComponent } ;