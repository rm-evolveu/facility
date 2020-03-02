import React from 'react';

class CityController extends React.Component {


    constructor (props) {
        super(props);
        this.cityNameRef = React.createRef();
        this.cityPopulationRef = React.createRef();
        this.cityLongitudeRef = React.createRef();
        this.cityLatitudeRef = React.createRef();
    }



    render () {

        return <div className="cityCard">
                    <div className="cityCardRow">
                        <div className="cityCardCell">
                            Name:
                        </div>
                        <div className="cityCardCell">
                            <input type="text" ref={this.cityNameRef}/>
                        </div>
                    </div>
                    <div className="cityCardRow">
                        <div className="cityCardCell">
                            Population:
                        </div>
                        <div className="cityCardCell">
                            <input type="number" ref={this.cityPopulationRef}/>
                        </div>
                    </div>
                    <div className="cityCardRow">
                        <div className="cityCardCell">
                            Longitude:
                        </div>
                        <div className="cityCardCell">
                            <input type="number" ref={this.cityLongitudeRef}/>
                        </div>
                    </div>
                    <div className="cityCardRow">
                        <div className="cityCardCell">
                            Latitude:
                        </div>
                        <div className="cityCardCell">
                            <input type="number" ref={this.cityLatitudeRef}/>
                        </div>
                    </div>
                    <div className="cityCardRow">
                        <div className="cityCardCell">
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
                                Let be
                            </button>
                        </div>
                    </div>
                </div>

    }

}

export { CityController } ;