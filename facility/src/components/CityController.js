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
                    <div className="wideColumn1">
                            Name:
                    </div>
                    <div className="wideColumn2">
                        <input type="text" ref={this.cityNameRef}/>
                    </div>
                    <div className="wideColumn1">
                            Population:
                    </div>
                    <div className="wideColumn2">
                        <input type="text" ref={this.cityPopulationRef}/>
                    </div>
                    <div className="wideColumn1">
                            Longitude:
                    </div>
                    <div className="wideColumn2">
                        <input type="text" ref={this.cityLongitudeRef}/>
                    </div>
                    <div className="wideColumn1">
                            Latitude:
                    </div>
                    <div className="wideColumn2">
                        <input type="text" ref={this.cityLatitudeRef}/>
                    </div>

                    <div className="widestColumn">
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
                            Genesize
                        </button>
                    </div>
                </div>

    }

}

export { CityController } ;