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
        this.cities = new Cities();
        const mogadisho = new City("Mogadisho", 100, 5, 10);
        this.cities.addCity(mogadisho);
        const tanjavur = new City("Tanjavur", 500, 5, 10);
        this.cities.addCity(tanjavur);
        this.citylist = this.cities.getCityList();
    
    }

    render () {

        return <div>
                    <div className="controller">
                        <CityController/>
                        <CityInfoDisplay/>
                    </div>

                    <br/>

                    {this.citylist.map(
                        (counter) => <CityCard
                                        cityName={this.cities.getName(counter)} 
                                        cityPopulation={this.cities.getPopulation(counter)}
                                        cityHemisphere={this.cities.whichHemisphere(counter)}
                                        cityHowBig={this.cities.howBig(counter)}
                                        handler={this.cities}
                                        counter={counter}
                                        key={counter}
                                     />
                    )}


                </div>

    }

}

export { CityComponent } ;