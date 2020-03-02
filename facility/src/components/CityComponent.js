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
                        <CityController/>
                        <CityInfoDisplay/>
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