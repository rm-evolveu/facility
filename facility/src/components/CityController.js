import React from 'react';

class CityController extends React.Component {


    constructor (props) {
        super(props);
        this.cityNameRef = React.createRef();
        this.cityPopulationRef = React.createRef();
        this.cityLongitudeRef = React.createRef();
        this.cityLatitudeRef = React.createRef();
    }

    superRandom(low, high) {
        // imagine that low is 0 and high is 10
        const result = Math.floor(Math.random()*(high - low + 1)) + low
        return result
    }

    randomize = async () => {
        this.cityNameRef.current.value = await this.props.randomCity() // to be continued
        this.cityPopulationRef.current.value = this.superRandom(1, 100000); 
        this.cityLongitudeRef.current.value = this.superRandom(-180, 180);
        this.cityLatitudeRef.current.value = this.superRandom(-90, 90);
    }



    render () {

        return <div className="card two-column controllerCard">
                    <div>
                        {this.props.messages.CityController.render.name}
                    </div>
                    <div>
                        <input type="text" ref={this.cityNameRef}/>
                    </div>
                    <div>
                        {this.props.messages.CityController.render.population}
                    </div>
                    <div>
                        <input type="text" ref={this.cityPopulationRef}/>
                    </div>
                    <div>
                        {this.props.messages.CityController.render.longitude}
                    </div>
                    <div>
                        <input type="text" ref={this.cityLongitudeRef}/>
                    </div>
                    <div>
                        {this.props.messages.CityController.render.latitude}
                    </div>
                    <div>
                        <input type="text" ref={this.cityLatitudeRef}/>
                    </div>

                    <div>
                        <button 
                            onClick={
                                () => {
                                    this.randomize() 
                                }
                            }>
                            {this.props.messages.CityController.render.randomize}
                        </button>
                    </div>

                    <div>
                        <button 
                            onClick={
                                () => { 
                                    this.props.addCityHandler(
                                        this.cityNameRef.current.value,
                                        Number(this.cityPopulationRef.current.value),
                                        Number(this.cityLongitudeRef.current.value),
                                        Number(this.cityLatitudeRef.current.value)
                                    );
                                }
                            }>
                            {this.props.messages.CityController.render.genesize}
                        </button>
                    </div>

                </div>

    }

}

export { CityController } ;