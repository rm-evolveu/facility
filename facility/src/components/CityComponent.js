import React from 'react';
import { CityCard } from './CityCard.js';
import { CityInfoDisplay } from './CityInfoDisplay.js';
import { CityController } from './CityController.js'
import { Cities } from "./cities.js";
import { City } from "./city.js";
import './Cities.css';



class CityComponent extends React.Component {


    constructor(props) {

        super(props) ;

        // array of objects containing city and key
        // [ {city: {city}, {counter: autoincrement } }]
        this.cities = new Cities;
        const mogadisho = new City("Mogadisho", 100, 5, 10);
        this.cities.addCity(mogadisho);
        const tanjavur = new City("Tanjavur", 500, 5, 10);
        this.cities.addCity(tanjavur);
        this.citylist = this.cities.getCityList();
    
    }

    render () {

        const letsHaveSomeFun = [
            {cityName: "Winnipeg", cityPopulation: 1 },
            {cityName: "Taxco", cityPopulation: 7},
            {cityName: "Delhi", cityPopulation: 37},
            {cityName: "Cairo", cityPopulation: 5}
        ]

        return <div>
                    <div className="controller">
                        <CityController/>
                        <CityInfoDisplay/>
                    </div>

                    <br/>


                    {letsHaveSomeFun.map(
                        (value) => <CityCard cityName={value.cityName} cityPopulation={value.cityPopulation}/>
                    )}

                    <br/>THIS IS A SEPARATOR<br/><br/>

                    {this.citylist.map(
                        (value) => <CityCard
                                        cityName={this.cities.getCity(value).getName()} 
                                        cityPopulation={this.cities.getCity(value).getPopulation()}/>
                    )}


                </div>

    }

}

export { CityComponent } ;